function palindrome(str) {
    if (str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").slice().reverse().join("") == str.toLowerCase().replace(/[^a-z0-9]/g, "")) {
        return true;
    }
    else {
        return false;
    }  
}