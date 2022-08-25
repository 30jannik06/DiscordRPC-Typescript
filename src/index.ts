import { Client } from "@xhayper/discord-rpc";
let clientID = "CLIENT_ID"; // Discord-Dev-Portal -> Application -> Your Application -> Copy ClientID
const client = new Client({
    clientId: clientID,
});

async function setActivity() {
    if (!client) return;
    client.user?.setActivity({
        details: "TITLE",
        state: "DESCRIPTION",
        /**
         * If you just want to have one or no picture:
         * Than you need to delete one ore both ImageKeys and Texts
         */
        largeImageKey:
            "LARGE_IMAGE (need to Upload in Application -> Rich Presence)",
        largeImageText: "LARGE IMAGE TEXT",
        smallImageKey:
            "SMALL_IMAGE (need to Upload in Application -> Rich Presence)",
        smallImageText: "SMALL IMAGE TEXT",
        buttons: [
            {
                label: "Button_TEXT",
                url: "BUTTON_LINK",
            },
            /**
             * If you just want to have one Button.
             * Than you need to delete the next part in the Array.
             */
            {
                label: "BUTTON_TEXT",
                url: "BUTTON_LINK",
            },
        ],
    });
}

client.on("ready", async () => {
    setActivity();
    console.log(`RPC is now actived for ${client.user.tag}`)

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

client.login();