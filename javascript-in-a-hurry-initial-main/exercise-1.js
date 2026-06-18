/* Consider the following array:

let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

Run a For Loop through the array and send to the console only the accounts with the "EX" prefix.

In the above example, these values must be sent to the console:

"EX_983746"
"EX_098777" */

let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

for (a in bankAccounts) {
    let sliced = bankAccounts[a].slice(0, 3);
    if (sliced == "EX_") {
        console.log(bankAccounts[a])
    }
}