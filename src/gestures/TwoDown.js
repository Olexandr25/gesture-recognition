import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe finger index down gesture 
const TwoDown = new GestureDescription('finger_index_down');


// thumb:
TwoDown.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
TwoDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
TwoDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
TwoDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index:
TwoDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.75);
TwoDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// middle:
TwoDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TwoDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
TwoDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.75);

// ring:
TwoDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.2);
TwoDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
TwoDown.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
TwoDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TwoDown.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.2);
TwoDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
TwoDown.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
TwoDown.setWeight(Finger.Index, 2);
TwoDown.setWeight(Finger.Middle, 2);

export default TwoDown;
