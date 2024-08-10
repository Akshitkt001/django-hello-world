<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>,
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>,
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    $(document).ready(function () {
        $('#hide_alert_message').click(function() {
                $('#alert_message').hide();
            });

        $('#svg-placeholder').click(function () {
            $('#image').click();
        });

        $('#image').change(function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#svg-placeholder').hide();
                $('#selected-image').attr('src', e.target.result).show();
            };

            reader.readAsDataURL(file);
        });
         // Define subcategories for each category
        var subcategories = {
            social: ["Chat & Messaging", "Social Media", "Dating"],
            entertainment: ["Music & Audio", "Video Streaming", "Gaming"],
            productivity: ["Task Management", "Note-taking", "Document Editing"],
            health: ["Exercise & Workout", "Nutrition & Diet", "Meditation & Mindfulness"]


        };

        // Function to populate subcategories based on the selected category
        function populateSubcategories(category) {
            var subcategoryOptions = subcategories[category];
            var subcategorySelect = $('#subcategory');

            subcategorySelect.empty(); // Clear previous options

            if (subcategoryOptions && subcategoryOptions.length > 0) {
                subcategoryOptions.forEach(function (subcategory) {
                    subcategorySelect.append($('<option>', {
                        value: subcategory.toLowerCase().replace(/\s+/g, '-'),
                        text: subcategory
                    }));
                });

                $('#subcategory-container').show(); // Show subcategory container if subcategories exist
            } else {
                $('#subcategory-container').hide(); // Hide subcategory container if no subcategories
            }
        }

        // Event listener for category selection change
        $('#category').change(function () {
            var selectedCategory = $(this).val();
            populateSubcategories(selectedCategory);
        });

    });
            // Add active class to the current button (highlight it)
            var header = document.getElementById("myDIV");
            var btns = header.getElementsByClassName("btn1");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                });
            }

            const dropZone = document.getElementById("dropZone");
        const fileInput = document.getElementById("fileInput");
        const selectedImages = document.getElementById("selectedImages");

        // Prevent default drag behaviors
        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        dropZone.addEventListener("dragenter", (e) => {
            e.preventDefault();
            dropZone.style.border = "2px dashed #000";
        });

        dropZone.addEventListener("dragleave", (e) => {
            e.preventDefault();
            dropZone.style.border = "2px dashed #aaa";
        });

        // Handle file drop
        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZone.style.border = "2px dashed #aaa";
            const files = e.dataTransfer.files;
            handleFiles(files);
        });

        // Handle file selection from input
        fileInput.addEventListener("change", () => {
            const files = fileInput.files;
            handleFiles(files);
        });

        // Display selected images
        function handleFiles(files) {
            selectedImages.innerHTML = ""; // Clear existing images
            dropZone.innerHTML = ""; // Clear drop zone contents

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (e) => {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    dropZone.appendChild(img);
                };

                // Read the image file as a data URL.
                reader.readAsDataURL(file);
            }
        }
