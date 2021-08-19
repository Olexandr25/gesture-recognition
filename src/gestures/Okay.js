import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe okay gesture 👌
const OkayDescription = new GestureDescription('okay');

// all fingers:
// - curled
// - vertical up
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    OkayDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
    OkayDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  }
  
// thumb:
// - half curled
// - vertical up (best) or diagonal up left / right
OkayDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OkayDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
OkayDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
OkayDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);

// Index:
// - half curled
// - vertical up (best) or diagonal up left / right
OkayDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
OkayDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
OkayDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
OkayDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);



OkayDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
OkayDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
OkayDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.5);
OkayDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.5);

OkayDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
OkayDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
OkayDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.5);
OkayDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.5);

OkayDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
OkayDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
OkayDescription.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.5);
OkayDescription.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.5);

export default OkayDescription;

