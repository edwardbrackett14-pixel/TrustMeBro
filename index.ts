/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "TrustMeBro",
    description: "Bypasses Discord’s age verification required under the UK Online Safety Act.",
    authors: [{ name: "Menhera.st Team", id: 1325012503419420734n }],
import { definePlugin } from "@vencord/types";
import { webpack } from "@vencord/webpack";

export default definePlugin({
    name: "TrustMeBro",
    description: "Bypasses Discord regional age verification checks.",
    authors: [{ name: "BoccchiChan", id: 0n }],
    patches: [
        {
            find: "getCurrentUser",
            replacement: {
                match: /getCurrentUser\(\)\{/g,
                replace: "$&setTimeout(()=>{const u=this.getCurrentUser();if(u){u.nsfwAllowed=true;u.flags|=1048576;u.personalizationAndDataMarketplaceEngagementAlpha=true;}},0);"
            }
        }
    ]
});
