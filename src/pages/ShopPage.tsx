import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Product1 from "../components/Product1";
import FrameComponent1 from "../components/FrameComponent1";
import TextFrame1 from "../components/TextFrame1";
import SubscribeFrame from "../components/SubscribeFrame";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./ShopPage.module.css";

const ShopPage: FunctionComponent = () => {
  return (
    <div className={styles.shopPage}>
      <section className={styles.pointContainer}>
        <div className={styles.backgroundImage}>
          <div className={styles.containerFrame}>
            <header className={styles.textBlock}>
              <h1 className={styles.fasco}>FASCO</h1>
              <div className={styles.linkListParent}>
                <div className={styles.frameHatsSandalsBelt}>
                  <Link className={styles.home} to="/">
                    Home
                  </Link>
                  <div className={styles.responsiveImagePolarizedCle}>
                    <div className={styles.pageDescriptionWomenChicGi}>
                      <div className={styles.frameSelectSizes}>
                        <div className={styles.featurePeakyBlindersVintage}>
                          <a className={styles.shop}>Shop</a>
                          <Link className={styles.products} to="/product-page">
                            Products
                          </Link>
                        </div>
                      </div>
                      <div className={styles.activePageIndicator} />
                    </div>
                    <div className={styles.frameFascoCopyrightBrandPr}>
                      <h1 className={styles.pageTitle}>Fashion</h1>
                    </div>
                  </div>
                  <Select className={styles.footerContent} w="62px" />
                </div>
              </div>
              <div className={styles.pagesSeparator}>
                <div className={styles.fASCOLogo}>
                  <div className={styles.footerSection}>
                    <div className={styles.buttonSvg}>
                      <img className={styles.vectorIcon} alt="" />
                    </div>
                  </div>
                  <div className={styles.svg}>
                    <img className={styles.vectorIcon1} alt="" />
                  </div>
                  <div className={styles.svg1}>
                    <img className={styles.vectorIcon2} alt="" />
                  </div>
                  <div className={styles.svg2}>
                    <img className={styles.vectorIcon3} alt="" />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.responsiveImageFrameWrapper}>
              <div className={styles.responsiveImageFrame}>
                <div className={styles.home1}>Home</div>
                <div className={styles.boxyDenimHatFrame}>
                  <div className={styles.svg3}>
                    <img className={styles.vectorIcon4} alt="" />
                  </div>
                </div>
                <div className={styles.fashion}>Fashion</div>
              </div>
            </div>
          </div>
          <div className={styles.path}>
            <div className={styles.polygon}>
              <div className={styles.circle}>
                <h2 className={styles.heading3}>Filters</h2>
                <div className={styles.rectangleRounded}>
                  <Select className={styles.textInput} />
                </div>
              </div>
              <div className={styles.iconFeatureFrame}>
                <div className={styles.button}>
                  <img className={styles.svgIcon} alt="" />
                </div>
                <div className={styles.button1}>
                  <img className={styles.svgIcon1} alt="" />
                </div>
                <div className={styles.button2}>
                  <img className={styles.svgIcon2} alt="" />
                </div>
                <div className={styles.button3}>
                  <img className={styles.svgIcon3} alt="" />
                </div>
                <div className={styles.button4}>
                  <img className={styles.svgIcon4} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.separatorLine}>
              <div className={styles.highQualityText}>
                <div className={styles.bagFrame}>
                  <div className={styles.freeShippingInfo}>
                    <div className={styles.supportText}>
                      <div className={styles.fashionFrame}>
                        <div className={styles.heading4}>Size</div>
                        <div className={styles.subscribeArea}>
                          <div className={styles.denimFrame}>
                            <div className={styles.itemLink}>
                              <div className={styles.s}>S</div>
                            </div>
                            <button className={styles.itemLink1}>
                              <div className={styles.m}>M</div>
                            </button>
                            <div className={styles.itemLink2}>
                              <div className={styles.l}>L</div>
                            </div>
                          </div>
                          <button className={styles.itemLink3}>
                            <div className={styles.xl}>XL</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.instagramIcon}>
                      <div className={styles.imageSet}>
                        <div className={styles.heading41}>Colors</div>
                      </div>
                      <div className={styles.productBox}>
                        <div className={styles.item}>
                          <div className={styles.spantagFilterColor} />
                        </div>
                        <div className={styles.item1}>
                          <div className={styles.spantagFilterColor1} />
                        </div>
                        <div className={styles.item2}>
                          <div className={styles.spantagFilterColor2} />
                        </div>
                        <div className={styles.item3}>
                          <div className={styles.spantagFilterColor3} />
                        </div>
                        <div className={styles.item4}>
                          <div className={styles.spantagFilterColor4} />
                        </div>
                        <div className={styles.item5}>
                          <div className={styles.spantagFilterColor5} />
                        </div>
                        <div className={styles.item6}>
                          <div className={styles.spantagFilterColor6} />
                        </div>
                        <div className={styles.item7}>
                          <div className={styles.spantagFilterColor7} />
                        </div>
                        <div className={styles.item8}>
                          <div className={styles.spantagFilterColor8} />
                        </div>
                        <div className={styles.item9}>
                          <div className={styles.spantagFilterColor9} />
                        </div>
                        <div className={styles.item10}>
                          <div className={styles.spantagFilterColor10} />
                        </div>
                        <div className={styles.item11}>
                          <div className={styles.spantagFilterColor11} />
                        </div>
                        <div className={styles.item12}>
                          <div className={styles.spantagFilterColor12} />
                        </div>
                        <div className={styles.item13}>
                          <div className={styles.spantagFilterColor13} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconFrame}>
                      <div className={styles.pagesContainer}>
                        <div className={styles.heading42}>Prices</div>
                        <div className={styles.fascoLogoFrame}>
                          <div className={styles.itemLink4}>$0-$50</div>
                          <div className={styles.itemLink5}>$50-$100</div>
                          <div className={styles.itemLink6}>$100-$150</div>
                          <div className={styles.itemLink7}>$150-$200</div>
                          <div className={styles.itemLink8}>$300-$400</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerFrame}>
                    <Product1
                      linkResponsiveImage="302x402.61x-932578154"
                      roundedRedHat="Rounded Red Hat"
                      subscribeNowButton="$8.00"
                    />
                  </div>
                </div>
                <div className={styles.rectangleBackgroundParent}>
                  <div className={styles.rectangleBackground}>
                    <div className={styles.rectangleBackgroundInner}>
                      <div className={styles.loremIpsumTextParent}>
                        <div className={styles.loremIpsumText}>
                          <div className={styles.brandsParent}>
                            <div className={styles.brands}>Brands</div>
                            <div className={styles.arrowDownsvg}>
                              <img className={styles.vectorIcon5} alt="" />
                            </div>
                          </div>
                          <div className={styles.frameInstagramFollow}>
                            <div className={styles.rectangleNewsletterForm}>
                              <div className={styles.linkMinimogWrapper}>
                                <div className={styles.linkMinimog}>
                                  Minimog
                                </div>
                              </div>
                              <div className={styles.linkRetrolie}>
                                Retrolie
                              </div>
                              <div className={styles.linkBrook}>Brook</div>
                            </div>
                            <div className={styles.linkLeartsParent}>
                              <div className={styles.linkLearts}>Learts</div>
                              <div className={styles.linkVagabond}>
                                Vagabond
                              </div>
                              <div className={styles.linkAbby}>Abby</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.emailinputFieldParent}>
                          <div className={styles.emailinputField}>
                            <div className={styles.collectionsParent}>
                              <div className={styles.collections}>
                                Collections
                              </div>
                              <div className={styles.itemLinkAllProductsParent}>
                                <div className={styles.itemLink9}>
                                  All products
                                </div>
                                <div className={styles.itemLink10}>
                                  Best sellers
                                </div>
                                <div className={styles.itemLink11}>
                                  New arrivals
                                </div>
                                <div className={styles.itemLink12}>
                                  Accessories
                                </div>
                              </div>
                              <div className={styles.heading43}>Tags</div>
                            </div>
                            <div className={styles.rectangle}>
                              <div className={styles.arrowDownsvg1}>
                                <img className={styles.groupIcon} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles.buttonFrame}>
                            <div className={styles.linkCollectionHeader}>
                              <div className={styles.bagsLink}>
                                <div className={styles.linkBags}>Bags</div>
                              </div>
                              <div className={styles.linkVagabond1}>
                                Vagabond
                              </div>
                            </div>
                            <div className={styles.snackerLink}>
                              <div className={styles.linkFashion}>Fashion</div>
                              <div className={styles.linkSnacker}>Snacker</div>
                              <div className={styles.linkSunglasses}>
                                Sunglasses
                              </div>
                            </div>
                            <div className={styles.textFrame}>
                              <div className={styles.sandalLink}>
                                <div className={styles.linkHats}>Hats</div>
                                <div className={styles.linkSandal}>Sandal</div>
                                <div className={styles.linkBelt}>Belt</div>
                              </div>
                              <div className={styles.textFrame1}>
                                <div className={styles.linkDenimParent}>
                                  <div className={styles.linkDenim}>Denim</div>
                                  <div className={styles.linkMinimog1}>
                                    Minimog
                                  </div>
                                </div>
                              </div>
                              <div className={styles.featureIcon}>
                                <div className={styles.linkBeachwear}>
                                  Beachwear
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.product04}>
                      <div className={styles.linkResponsiveImageWrapper}>
                        <img className={styles.linkResponsiveImage} alt="" />
                      </div>
                      <div className={styles.orderOverDedicatedsupport}>
                        <div className={styles.followUsOnInstagram}>
                          <div
                            className={styles.loremipsumdolorsitametconsecte}
                          >
                            <div className={styles.imageGroup}>
                              <div className={styles.boxyDenimHat}>
                                Boxy Denim Hat
                              </div>
                              <div className={styles.sizeOption}>$25.00</div>
                            </div>
                          </div>
                          <div className={styles.separatorNode}>
                            <div className={styles.divsfTooltipItem}>
                              <div className={styles.divproductOptionItem} />
                            </div>
                            <div className={styles.divsfTooltipItem1}>
                              <div className={styles.divproductOptionItem1} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product07}>
                    <div className={styles.linkResponsiveImageContainer}>
                      <img className={styles.linkResponsiveImage1} alt="" />
                    </div>
                    <div className={styles.freeShippingTag}>
                      <div className={styles.orderSupportTag}>
                        <div className={styles.polarizedSunglassesFrame}>
                          <div className={styles.polarisedSunglassesParent}>
                            <div className={styles.polarisedSunglasses}>
                              Polarised Sunglasses
                            </div>
                            <div className={styles.divfPriceSale}>
                              <div className={styles.div}>$18.00</div>
                              <div className={styles.div1}>$21.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.separatorNode1}>
                          <div className={styles.divsfTooltipItem2}>
                            <div className={styles.divproductOptionItem2} />
                          </div>
                          <div className={styles.divsfTooltipItem3}>
                            <div className={styles.divproductOptionItem3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textFrameCollection}>
                <div className={styles.product02}>
                  <div className={styles.boxyDenimHatFrame1}>
                    <div className={styles.divoverflowHidden}>
                      <img className={styles.linkResponsiveImage2} alt="" />
                      <div className={styles.spanprodTag}>
                        <div className={styles.soldOut}>
                          <p className={styles.sold}>Sold</p>
                          <p className={styles.out}>Out</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.loremipsumFrame}>
                    <div className={styles.frameFrame}>
                      <div className={styles.iconFrame1}>
                        <div className={styles.linenBlendShirt}>
                          Linen-blend Shirt
                        </div>
                      </div>
                      <div className={styles.freeShippingSupportFrame}>
                        <div className={styles.subscribeToNewsletterFrame}>
                          <div className={styles.imageFrameCollection}>
                            $17.00
                          </div>
                        </div>
                        <div className={styles.separatorNode2}>
                          <div className={styles.divsfTooltipItem4}>
                            <div className={styles.divproductOptionItem4} />
                          </div>
                          <div className={styles.divsfTooltipItem5}>
                            <div className={styles.divproductOptionItem5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.product05}>
                  <div className={styles.linkResponsiveImageFrame}>
                    <img className={styles.linkResponsiveImage3} alt="" />
                  </div>
                  <div className={styles.boxyDenimHat1}>
                    <div className={styles.responsiveimage}>
                      <div className={styles.divfpricesale}>
                        <div className={styles.peakyBlinders}>
                          <div className={styles.linenPlainTop}>
                            Linen Plain Top
                          </div>
                          <div
                            className={styles.loremipsumdolorconsecteturadip}
                          >
                            $25.00
                          </div>
                        </div>
                      </div>
                      <div className={styles.icon}>
                        <div className={styles.divsfTooltipItem6}>
                          <div className={styles.divproductOptionItem6} />
                        </div>
                        <div className={styles.divsfTooltipItem7}>
                          <img
                            className={styles.divproductOptionItemIcon}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Product1
                  linkResponsiveImage="302x402.61x-1569317699"
                  roundedRedHat="Rockstar Jacket"
                  subscribeNowButton="$22.00"
                  propPadding="0px var(--padding-xs) var(--padding-5xs) var(--padding-6xs)"
                  propBackgroundColor="#c6aec7"
                  propBackgroundColor1="#bedce3"
                />
              </div>
              <div className={styles.copyrightText}>
                <div className={styles.product03}>
                  <div className={styles.frameDiv}>
                    <img className={styles.linkResponsiveImage4} alt="" />
                  </div>
                  <div className={styles.product03Inner}>
                    <div className={styles.frameParent}>
                      <div className={styles.longSleeveCoatWrapper}>
                        <div className={styles.longSleeveCoat}>
                          Long-sleeve Coat
                        </div>
                      </div>
                      <div className={styles.wrapper}>
                        <div className={styles.div2}>$106.00</div>
                      </div>
                      <div className={styles.separatorNode3}>
                        <div className={styles.divsfTooltipItem8}>
                          <div className={styles.divproductOptionItem7} />
                        </div>
                        <div className={styles.divsfTooltipItem9}>
                          <div className={styles.divproductOptionItem8} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.product06}>
                  <div className={styles.linkResponsiveImageWrapper1}>
                    <img className={styles.linkResponsiveImage5} alt="" />
                  </div>
                  <div className={styles.product06Inner}>
                    <div className={styles.frameGroup}>
                      <div className={styles.oversizedTShirtWrapper}>
                        <div className={styles.oversizedTShirt}>
                          Oversized T-shirt
                        </div>
                      </div>
                      <div className={styles.divfPriceSaleWrapper}>
                        <div className={styles.divfPriceSale1}>
                          <div className={styles.button5}>$11.00</div>
                          <div className={styles.separator}>$14.00</div>
                        </div>
                      </div>
                      <div className={styles.divsfTooltipItemParent}>
                        <div className={styles.divsfTooltipItem10}>
                          <div className={styles.divproductOptionItem9} />
                        </div>
                        <div className={styles.divsfTooltipItem11}>
                          <div className={styles.divproductOptionItem10} />
                        </div>
                        <div className={styles.divsfTooltipItem12}>
                          <div className={styles.divproductOptionItem11} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.product09}>
                  <div className={styles.linkResponsiveImageWrapper2}>
                    <img className={styles.linkResponsiveImage6} alt="" />
                  </div>
                  <div className={styles.product09Inner}>
                    <div className={styles.frameContainer}>
                      <div className={styles.dottedBlackDressWrapper}>
                        <div className={styles.dottedBlackDress}>
                          Dotted Black Dress
                        </div>
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.container}>
                          <div className={styles.div3}>$20.00</div>
                        </div>
                        <div className={styles.divsfTooltipItemGroup}>
                          <div className={styles.divsfTooltipItem13}>
                            <div className={styles.divproductOptionItem12} />
                          </div>
                          <div className={styles.divsfTooltipItem14}>
                            <div className={styles.divproductOptionItem13} />
                          </div>
                          <div className={styles.divsfTooltipItem15}>
                            <div className={styles.divproductOptionItem14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1
        propTop="unset"
        propBottom="2030px"
        suspenderDisplay="inline-block"
        hugoBossDisplay="inline-block"
        flatCapDisplay="inline-block"
        hugoBossDisplay1="inline-block"
        santoniDisplay="inline-block"
      />
      <TextFrame1 />
      <div className={styles.imageGallery}>
        <img className={styles.imageIcon} alt="" />
        <img className={styles.imageIcon1} alt="" />
        <img className={styles.imageIcon2} alt="" />
        <img className={styles.imageIcon3} alt="" />
        <img className={styles.imageIcon4} alt="" />
        <img className={styles.imageIcon5} alt="" />
        <img className={styles.imageIcon6} alt="" />
      </div>
      <SubscribeFrame />
      <FrameComponent4 />
    </div>
  );
};

export default ShopPage;
