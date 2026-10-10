"""Super-resolve an image with OpenCV's dnn_superres.

Usage: sr.py MODEL_DIR SCALE IN OUT [edsr|fsrcnn]
EDSR (default) is slow but sharper; FSRCNN (x2 only) is fast.
"""
import sys

import cv2

model_dir, scale, src, dst = sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4]
algo = sys.argv[5] if len(sys.argv) > 5 else "edsr"
sr = cv2.dnn_superres.DnnSuperResImpl_create()
sr.readModel(f"{model_dir}/{algo.upper()}_x{scale}.pb")
sr.setModel(algo, scale)
img = cv2.imread(src, cv2.IMREAD_UNCHANGED)
alpha = None
if img.ndim == 3 and img.shape[2] == 4:
    alpha = cv2.resize(img[:, :, 3], None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
    img = img[:, :, :3]
out = sr.upsample(img)
if alpha is not None:
    out = cv2.merge([*cv2.split(out), alpha])
cv2.imwrite(dst, out)
