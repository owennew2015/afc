"""Super-resolve an image with OpenCV's EDSR model: sr.py MODEL_DIR SCALE IN OUT"""
import sys, cv2
model_dir, scale, src, dst = sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4]
sr = cv2.dnn_superres.DnnSuperResImpl_create()
sr.readModel(f"{model_dir}/EDSR_x{scale}.pb")
sr.setModel("edsr", scale)
img = cv2.imread(src, cv2.IMREAD_UNCHANGED)
alpha = None
if img.ndim == 3 and img.shape[2] == 4:
    alpha = cv2.resize(img[:, :, 3], None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
    img = img[:, :, :3]
out = sr.upsample(img)
if alpha is not None:
    out = cv2.merge([*cv2.split(out), alpha])
cv2.imwrite(dst, out)
