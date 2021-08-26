import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe 4 finger down gesture  
const FourDown = new GestureDescription('four_down');

// thumb full curl:
FourDown.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);


// index no curl:
FourDown.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FourDown.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
FourDown.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
FourDown.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

// middle no curl:
FourDown.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FourDown.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
FourDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.5);
FourDown.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.5);

// ring no curl:
FourDown.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FourDown.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
FourDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.5);
FourDown.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.5);

// pinky no curl:
FourDown.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FourDown.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
FourDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.5);
FourDown.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.5);

export default FourDown;
