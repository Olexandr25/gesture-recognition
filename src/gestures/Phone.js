import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 🤙
const PhoneDescription = new GestureDescription('phone');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
PhoneDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
PhoneDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
PhoneDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
PhoneDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// Pinky:
// - not curled
// - vertical up (best) or diagonal up left / right
PhoneDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
PhoneDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.5);
PhoneDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
PhoneDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.5);



// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  PhoneDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  PhoneDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  PhoneDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default PhoneDescription;
