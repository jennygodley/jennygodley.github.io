$(() => {
  $('.kitty-picture').mouseover(() =>
    $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match3.png').mouseout(() =>
      $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match2.png')))
  $('.tic-tac-toe-picture').mouseover(() =>
    $('.tic-tac-toe-picture').attr('src', 'assets/images/tic_tac_toe2.png').mouseout(() =>
      $('.tic-tac-toe-picture').attr('src', 'assets/images/tic_tac_toe.png')))
})

// const replaceKitty = function () {
//   $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match3.png').mouseout(() => $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match2.png'))
// }
