import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👇
const fingerDownDescription = new GestureDescription('finger_down');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerDownDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fingerDownDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
fingerDownDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
fingerDownDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// index:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerDownDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fingerDownDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
fingerDownDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
fingerDownDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  fingerDownDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  fingerDownDescription.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

export default fingerDownDescription;
