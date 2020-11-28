// document.body.addEventListener('click', (e) => {
//   if (e.target.type == 'checkbox') {
//     const checked = e.target.checked;

//     walk(e.target, (child) => {
//       child.checked = checked;
//     })
//   }
// });

function walk(root, callback) {
  if (root.type === 'checked') {
    callback(root);
    const next = root.parentNode.children[1];

    if(next && next.classList.contains('tree')) {
      walk(next, callback);
    }
  } else {
    [].slice.call(root.children).forEach(child => {
      walk(child, callback);
    });
  }
}

export {walk}; 
