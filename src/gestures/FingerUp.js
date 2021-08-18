import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👆
const fingerUpDescription = new GestureDescription('finger_up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fingerUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
fingerUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
fingerUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// index:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerUpDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fingerUpDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
fingerUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
fingerUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  fingerUpDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  fingerUpDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  fingerUpDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default fingerUpDescription;
