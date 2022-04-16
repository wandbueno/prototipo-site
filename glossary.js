function tableshowhide(a, b, c) {
  len = itemmenu.childElementCount

  closeall()
  for (i = 0; i < len; i++) {
    itemmenu.children[i].onclick = function () {
      closeall()
      all.children[this.id].style.display = 'block'
    }
  }
  function closeall() {
    for (i = 0; i < all.childElementCount; i++) {
      all.children[i].style.display = 'none'
    }
  }
  itemmenu.children[c].click()
}

tableshowhide('itemmenu', 'all', 'types')
