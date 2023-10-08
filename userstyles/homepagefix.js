/* ==UserStyle==
@name           HomePageFix
@description    Fixed Homepage
@namespace      HomePageFix
@version        1.0
@license        MIT
@preprocessor   stylus

@advanced select customHP                   "Homepage:" ["Enabled", "Disabled"]
@advanced range videoPerRowHP               "Videos Per Row" [4, 1, 9, 1]


==/UserStyle== */
i=!important //
t=transparent //
@-moz-document domain("youtube.com") {
    :root {
        --video-per-row-homepage: videoPerRowHP;
        --video-per-row-channelpage: videoPerRowCP;
        --sub-red-btn: #CC0000;
        --sub-white--text-btn: #F2F2F2;
        --sub-black-bg-btn: #303030;
        --color1: #3ea6ff;
        --like-lime: #00FF00;
        --dislike-red: #FF0000;
        --dark-yt-spec-general-background-a: #181818;
        --dark-yt-spec-brand-background-primary: rgba(33, 33, 33, 0.98);
        --dark--yt-spec-10-percent-layer: rgba(255, 255, 255, 0.1);
    }


/* Custom Homepage */
    if (customHP=="Enabled") {

        /* Number Of Videos Per Row */
        [page-subtype="home"] {
            ytd-rich-grid-renderer {
                --ytd-rich-grid-items-per-row: var(--video-per-row-homepage) i;
                #contents {
                    max-width: calc(100% - 2 * 3vw);

                    /* Set to be treated as if they were the children of their parent element */
                    ytd-rich-grid-row,
                    ytd-rich-grid-row #contents {
                        display: contents;
                    }

                    #contents > ytd-rich-item-renderer {
                        margin: 0 4px 24px 4px i;
                    }
                }
            }
        }

        /* Remove unloaded videos */
        ytd-rich-section-renderer,
        .ghost-grid.ytd-ghost-grid-renderer {
            display: none;
        }

        /* Display unloaded videos per row when refresh the homepage */
        #home-page-skeleton .rich-shelf-videos .rich-grid-media-skeleton.mini-mode,
        #home-page-skeleton #home-container-media .rich-grid-media-skeleton.mini-mode {
            margin: 0 4px;
            flex-basis: calc(100%/var(--video-per-row-homepage) - 16px - 0.01px);
            min-width: calc(100%/var(--video-per-row-homepage) - 16px - 0.01px);
            max-width: calc(100%/var(--video-per-row-homepage) - 16px - 0.01px);
        }

        [page-subtype="home"] {
            #contents > ytd-rich-item-renderer {
                margin: 0 4px 24px 4px;

                /* Remove the blank video thumbnail is an advertisement video that was deleted by an AdBlock extension, such as uBlock Origin, AdBlock, Adblock Plus, and others */
                &:has(#content > ytd-ad-slot-renderer) {
                    display: none;
                }
            }

            #contents.ytd-rich-grid-renderer {
                margin-top: 6px i;
            }
        }

        }
    }