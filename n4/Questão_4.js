function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    if (regex.test(str)) {
      return true;
    } else {
      return false
    }
}