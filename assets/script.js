<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
