document.addEventListener("DOMContentLoaded", () => {
    try {
        /*
          Vars
        */
        const boardMain = document.getElementById("boardMain");
        let isDragging = false;

        /*
          Event
        */
        boardMain.addEventListener('mousedown', function (event) {

            /*
              Basic Config
            */
            let dragElement = event.target.closest('.draggable');
            let board = document.getElementById("board");
            if (!dragElement) return;

            dragElement.ondragstart = function () {
                return false;
            };

            event.preventDefault();

            /*
              Code
            */
            let shiftX;
            startDrag(dragElement, event.clientX);

            /*
              Functions
            */
            function onMouseUp(event) {
                finishDrag();
            };

            function onMouseMove(event) {
                moveAt(event.clientX);
            }

            function startDrag(element, clientX) {
                if (isDragging) {
                    return;
                }

                isDragging = true;

                board.addEventListener('mousemove', onMouseMove);
                element.addEventListener('mouseup', onMouseUp);

                shiftX = clientX - element.getBoundingClientRect().left;
                moveAt(clientX);
            };

            // switch to absolute coordinates at the end, to fix the element in the board
            function finishDrag() {
                if (!isDragging) {
                    return;
                }

                isDragging = false;

                dragElement.style.top = parseInt(dragElement.style.top) + board.pageYOffset + 'px';

                board.removeEventListener('mousemove', onMouseMove);
                dragElement.removeEventListener('mouseup', onMouseUp);
            }

            function moveAt(clientX) {
                // new window-relative coordinates
                let newX = clientX - shiftX;
                let offsetX = window.innerWidth - parseInt(getComputedStyle(dragElement).width) - 50

                if (window.innerWidth > parseInt(getComputedStyle(dragElement).width)) {
                    return;
                } else if (newX >= 0) {
                    newX = 0;
                } else if (newX <= offsetX) {
                    newX = offsetX;
                }

                dragElement.style.left = newX + 'px';
            }

        });
    } catch (err){
        console.log(err)
    }
})