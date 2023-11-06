import definePlugin from "@utils/types";

export default definePlugin({
    name: "Epic Plugin",
    description: "This plugin is absolutely epic",
    authors: [
        {
            id: 0n,
            name: "Your Name",
        },
    ],
    patches: [],
(function() {
    'use strict';

    function clickButton() {
        const notafucker = document.getElementById("emoji-picker-tab-panel")
        if (notafucker) {
            const proof = document.querySelector('[aria-label="Super Reactions enabled"]');
            const button = document.querySelector('[for="burst-reaction-toggle-button"]');
        
            if (!proof && notafucker) {
                button.click(); console.log("i clicked it boss");
            }
        }
    }

    // Call the function at an interval
    setInterval(clickButton, 100); // Adjust the interval as needed
})();
});
