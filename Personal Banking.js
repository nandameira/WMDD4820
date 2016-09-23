/*

01)

Personal Banking

You have an income of 1500 per month
You need to transfer 500 to an account that your rent comes out of.
500 stays in your primary account for monthly expenses
200 is transferred into one investment account
and the remaining 300 to another account

Your program should make these transfers automatically when you
get payed and keep track of the amount in all of these accounts.

KEEP track of incoming money

TRANSFER money to rent

PRIMARY account amount

primary = primary - rent
primary = primary - investiment

if primary is 1500 or more transfer


*/

1 - Create an income of 1500 per month and put it in a primary account 
	Primary account balance = 1500.

2 - If the account balance is 1500 or more go to item 3

3 - Substract 500 from the primary account to rent 
	Primary account balance = 1000 (1500 - 500). 

4 - Substract 500 from the primary account to monthly expenses.
	Primary account balance = 500 (1000 - 500). 

5 - Substract from primary account 200 and send it to investment account
	Primary account balance = 300 (500 - 200). 

6 - Substract from the primary account 300 and send it to another account
	Primary account balance = 0 (300 - 300). 

7 - Repeat the process every month when the account balance is 1500 or more.
