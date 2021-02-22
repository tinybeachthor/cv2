const utils = {
  formatLink: (input) => {
    function validateEmail(input) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(input);
    }
    function validatePhone(input) {
      const re = /^(\+[0-9]{1,3})?([-. ]?[0-9]{3,4}){3}$/
      return re.test(input)
    }

    if (validateEmail(input)) {
      return `mailto:${input}`
    }
    if (validatePhone(input)) {
      return `tel:${input}`
    }
    return input
  },
}

export default utils
