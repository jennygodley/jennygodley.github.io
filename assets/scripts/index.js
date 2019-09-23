$(() => {
  $('.kitty-picture').mouseover(() =>
    $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match3.png').mouseout(() =>
      $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match2.png')))

  $('.tic-tac-toe-picture').mouseover(() =>
    $('.tic-tac-toe-picture').attr('src', 'assets/images/tic_tac_toe2.png').mouseout(() =>
      $('.tic-tac-toe-picture').attr('src', 'assets/images/tic_tac_toe.png')))

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(window).scroll(function () {
    const offset = $(window).scrollTop()
    $('.navbar').toggleClass('nottrans', offset > 300)
  })

  // $(window).scroll(function () {
  //   const offset = $(window).scrollTop()
  //   $('.navbar-expand-lg').toggleClass('#navbarText', offset < 300)
  // })
})

// const replaceKitty = function () {
//   $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match3.png').mouseout(() => $('.kitty-picture').attr('src', 'assets/images/bad_kitty_word_match2.png'))
// }
