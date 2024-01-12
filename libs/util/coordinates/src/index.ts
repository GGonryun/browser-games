export type Point = {
  x: number;
  y: number;
};

export type RectPlane = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export const isRectPlane = (plane: RectPlane): plane is RectPlane => {
  return (
    plane.left != null &&
    plane.top != null &&
    plane.width != null &&
    plane.height != null
  );
};

export const makeRect = (a: DOMRect | RectPlane): DOMRect => {
  if (a instanceof DOMRect) {
    return a;
  } else if (isRectPlane(a)) {
    return new DOMRect(a.left, a.top, a.width, a.height);
  } else {
    throw new Error('Invalid shape');
  }
};

export const intersectingRect = (
  a: DOMRect | RectPlane,
  b: DOMRect | RectPlane
) => {
  const rectA = makeRect(a);
  const rectB = makeRect(b);
  // check to see if two rectangles are intersecting.
  return (
    rectA.left <= rectB.right &&
    rectB.left <= rectA.right &&
    rectA.top <= rectB.bottom &&
    rectB.top <= rectA.bottom
  );
};
