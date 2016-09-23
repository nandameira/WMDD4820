Chapter 3 

// --------------------

Exercise #1 - Minimum


function min(a, b) { 			 // The function that shows the smallest number
  if (a < b) 
    return a; 			   		// if the value of A is less than B, return A (shows the number A)
  else
    return b; 			  		// if the value of A is greater than B, return B (shows the number B)
}


// --------------------


Exercise #2 - Recursion

function isEven(n) {			// The function that shows if the number is even or odd. 

  if (n == 0)
    return true;				

  else if (n == 1)
    return false;

  else if (n < 0)				// If n is less than 0 we call the function transforming the number into positive
    return isEven(-n);

  else
    return isEven(n - 2);		//The function is called recursivelly to subtract 2 from the original number and repeat until it is 0 or 1.
}


// --------------------


Exercise #3 - Bean Counting


function countChar(string, ch) {				//This function count the number of an especific letter in a string.
  var counted = 0;								// This part count the characters number of an string and compares with the letter especified above, the process repeat till all the characters were analysed.
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) ==ch)					// If there is the letter especified above it counts and than show the sum of those.
      counted += 1;
  return counted;
}

function countBs(string) {					// This function counts the number of letter B in a string.
  return countChar(string, "B");
}
 