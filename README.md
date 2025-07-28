This project is based on the automata concept for 1's & 2's complements of binary numbers.

1's Complement :
It uses the simple comcept i.e., if input is 0 then output is 1 else 0 defined in function using ternary operator.

Example-
Input : 1011101
Output : 0100010

2's Complement :
For 2's complement we use a different strategy. Here we take the input and then that input is converted into an array.
This array is read from the right(end) one by one.
Now from right if it reads 0 then output will be 0, if it reads 1 then the output will be 1 now after all the numbers will be altered i.e.,
After the first occurance of 1 all the other numbers will be changed i.e., 0 will become 1 and 1 will become 0.
Then the array elements will be combined into a string,
Hence the final output is 2's Complement.

Example-
Input : 1011101    
1011101<-- Reads from right
1011101<-- Read 1 hence as it is i.e., 1
101110<-- Read 0 so 1
10111<-- Read 1 so 0
1011<-- Read 1 so 0
101<-- Read 1 so 0
10<-- Read 0 so 1
1<-- Read 1 so 0

Now After Combining
Output : 0100011

