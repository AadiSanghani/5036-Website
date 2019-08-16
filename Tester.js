var all = document.getElementsByTagName("*"),
  i = 0,
  rect;
for (; i < all.length; i++) {
  rect = all[i].getBoundingClientRect();
  if (rect.right < 0) all[i].style.outline = "1px solid red";
}
