import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👆
const OneUpDescription = new GestureDescription('one_up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
OneUpDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
OneUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
OneUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
OneUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
// - not curled
// - vertical up (best) or diagonal up left / right
OneUpDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
OneUpDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
OneUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
OneUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OneUpDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  OneUpDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default OneUpDescription;
