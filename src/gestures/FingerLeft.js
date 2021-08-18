import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👈
const fingerLeftDescription = new GestureDescription('finger_left');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerLeftDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fingerLeftDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
fingerLeftDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
fingerLeftDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

// index:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerLeftDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fingerLeftDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
fingerLeftDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
fingerLeftDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  fingerLeftDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  fingerLeftDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

export default fingerLeftDescription;
