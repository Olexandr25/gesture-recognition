import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe finger index down gesture 
const FingerIndexDown = new GestureDescription('finger_index_down');


// thumb:
FingerIndexDown.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
FingerIndexDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
FingerIndexDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
FingerIndexDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index:
FingerIndexDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FingerIndexDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.75);
FingerIndexDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// middle:
FingerIndexDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FingerIndexDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
FingerIndexDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.75);

// ring:
FingerIndexDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
FingerIndexDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.2);
FingerIndexDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
FingerIndexDown.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
FingerIndexDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
FingerIndexDown.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.2);
FingerIndexDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
FingerIndexDown.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
FingerIndexDown.setWeight(Finger.Index, 2);
FingerIndexDown.setWeight(Finger.Middle, 2);

export default FingerIndexDown;
