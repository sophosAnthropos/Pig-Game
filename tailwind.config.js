/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Components/**/*.{html,tsx,ts,jsx,js}',
    './src/Utilities/Logic/Array_Of_Images.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px'
      },
      height: {
        btnCon: '15%',
        tenth: '10%',
        dieRow: '30%',
        dieRowCon: '95%',
        pigOptCon: '40%',
      },
      width: {
        dieOpt: '30%',
        pigIcons: '8%',
        name_Icon_Con: '90%'
      },
      maxWidth: {
        dieOptM: '9rem'
      },
      boxShadow: {
        modBtn: '2px 2px 7px rgb(250 204 21)',
        modBtnHov: '0 0 15px rgb(253, 224, 71), inset 2px 2px 0 rgb(234 179 8)',
        dOShadow: '3px 3px 6px #1d4ed8,inset 2px 2px 6px #a3a3a3',
        dOShadowHov: '3px 3px 6px #1d4ed8, inset -2px -2px 6px #a8a8a8',
        dieModEdges: 'inset 3px 4px 5px #1d4ed8'
      },
      borderColor: {
        modalBBY: 'rgb(113 63 18)',
        modalBBLY: 'rgb(202 138 4)',
      },
      borderWidth: {
        modalBB1: '1px',
        modalBB2: '2px',
      },
      backgroundColor: {
        winBg: 'url(`./src/Assets/Images/backGroundImage/05_piggyWinner.jpg`)'
      }
    },
  },
  plugins: [],
}