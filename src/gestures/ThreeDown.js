import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe finger index down gesture 
const ThreeDown = new GestureDescription('three_down');


// thumb:
ThreeDown.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
ThreeDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
ThreeDown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
ThreeDown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index:
ThreeDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ThreeDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.75);
ThreeDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// middle:
ThreeDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ThreeDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
ThreeDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.75);

// ring:
ThreeDown.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ThreeDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.2);
ThreeDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);
ThreeDown.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
ThreeDown.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ThreeDown.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.2);
ThreeDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);
ThreeDown.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
ThreeDown.setWeight(Finger.Index, 2);
ThreeDown.setWeight(Finger.Middle, 2);

export default ThreeDown;
