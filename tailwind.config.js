module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
       screens: {
     
      'md': [{'max': '960px' }],
      'mdd': [{'max': '800px' }],
      'smm': [{'max': '629px' }],
      'smn': [{'max': '560px' }],
      'lg': [{'max': '1440px' }],
      'lm': [{'max': '1150px' }],
      'l': [{'max': '476px' }],
      's': [{'max': '360px' }],
    },
    inset: {
      'minus-100': '-700px',
      '1': '0px',
      '2': '3rem',
      '2/2': '4.3rem',
      '2/23': '5.3rem',
      '3': '6.3rem',
      '4': '9rem',
      '5': '12rem',
     },
    extend: {
      colors: {},
      zIndex: {
        "z-minus": '-1',
      }
    },
  },
  variants: {},
  plugins: [],
}
