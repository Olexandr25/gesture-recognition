import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👉
const fingerRightDescription = new GestureDescription('finger_right');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerRightDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fingerRightDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
fingerRightDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);
fingerRightDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

// index:
// - not curled
// - vertical up (best) or diagonal up left / right
fingerRightDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fingerRightDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
fingerRightDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
fingerRightDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  fingerRightDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  fingerRightDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default fingerRightDescription;


git remote add origin https://github.com/Olexandr25/gesture-recognition.git
git branch -M main
git push -u origin main