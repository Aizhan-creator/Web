import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab4-online-store';
  currentList = 1;

  constructor(){



    // this.productItem = [
    //   {
    //     name: 'Yankee Candle Balsam & Cedar Large Jar Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/910lSrQ2YTL._AC_SX679_.jpg',
    //     description: '• Balsam, aromatic cedar wood, and juniper berry blend together for a festive forest fragrance\n' +
    //     '• Long-lasting 110-150 hour burn time\n' +
    //     '• Quality paraffin-grade candle wax delivers a clear, consistent burn. Top: Crisp Citrus, Herbs, Red Berry. Mid: Pine Balsam, Cedar, and Sandalwood. Base: Vanilla, Warm Amber, Musk\n' +
    //     '• 22-ounce scented candle measures 6.6" H x 4" D\n' +
    //     '• Natural fiber candle wick delivers the best burn for each fragrance\n' +
    //     '• 100% recyclable in partnership with TerraCycle',
    //     rating: 4.7,
    //     link: 'https://www.amazon.com/Yankee-Candle-Large-Balsam-Cedar/dp/B000JDGC78/ref=sr_1_33?dchild=1&keywords=candles&qid=1614104842&sr=8-33'
    //   },
    //   {
    //     name: 'Yankee Candle Large Jar Candle Lilac Blossoms',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/71JgAHbevKL._AC_SX679_.jpg',
    //     description: `• This scent takes you to an alluring grove filled with lavender, white, and deep purple lilacs\n` +
    //       '• Long lasting 110 to 150 hour burn time\n' +
    //       '• Quality paraffin grade candle wax delivers a clear, consistent burn\n' +
    //       '• 22 ounce scented candle measures 6.6 inches H x 4 inches D\n' +
    //       '• Natural fiber candle wick delivers the best burn for each fragrance\n' +
    //       '• 100% recyclable in partnership with TerraCycle',
    //     rating: 4.7,
    //     link: 'https://www.amazon.com/Yankee-Candle-Large-Lilac-Blossoms/dp/B000WQY7RO/ref=sr_1_4?dchild=1&keywords=candles&qid=1614104842&sr=8-4'
    //   },
    //   {
    //     name: 'Mrs. Meyer\'s Clean Day Scented Soy Aromatherapy Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/81Rzk5DVmoL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    //     description: '• Candle made from renewable ingredients like soy wax and vegetable wax\n' +
    //       '• Nonmetal, lead-free, long burning candle wick burns for 35 hours for a long-lasting Lavender scent\n' +
    //       '• Garden-fresh Lavender has an original and clean floral scent\n' +
    //       '• Comes in a recyclable glass candle jar - makes for an easy gift\n' +
    //       '• Mrs. Meyer\'s produces cruelty free candles. None of our products are tested on animals.',
    //     rating: 4.5,
    //     link: 'https://www.amazon.com/Mrs-Meyers-Scented-Candle-Lavender/dp/B01MG29NPS/ref=sr_1_1_sspa?dchild=1&keywords=candles&qid=1614104842&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOU8xRVdNS05SQVlBJmVuY3J5cHRlZElkPUEwMzU5OTI1M0dSN09CWDQyNU5XRCZlbmNyeXB0ZWRBZElkPUEwODU5NTAwMkVMUVVLNzdTWEoyTSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
    //   },
    //   {
    //     name: 'Diptyque Tubereuse Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/51lrHc9%2BKXL._AC_.jpg',
    //     description: '• Approximate Burn Time: 50-60 Hours\n' +
    //       '• Net Weight: 6.5 oz\n' +
    //       '• Dimensions: 3.5 inches tall by 3 inches wide\n' +
    //       '• Wick Type: Lead-free cotton\n' +
    //       '• Wax Type: Proprietary Soy Blend',
    //     rating: 4.6,
    //     link: 'https://www.amazon.com/Diptyque-11033u-Tubereuse-Candle-6-5-oz/dp/B0043TU1VM/ref=sxin_11_hip-asp-01_980895a56449fae2fcd585db21604276f0c5a0c2?cv_ct_cx=candles&dchild=1&keywords=candles&pd_rd_i=B0043TU1VM&pd_rd_r=9a034025-1e63-4e98-b565-06a37335cdd4&pd_rd_w=medCe&pd_rd_wg=avaSP&pf_rd_p=dc117900-5684-47fd-b023-067e2bf4e675&pf_rd_r=T11FY6FF4VVHY3RSYHP0&qid=1614104842&sr=1-1-9e4bad12-957b-4e27-9cac-f327b63aafec'
    //   },
    //   {
    //     name: 'Diptyque Baies Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/51fezGtGC2L._SX300_SY300_QL70_FMwebp_.jpg',
    //     description: '• The scent of a bouquet of roses sweetened with black currant Leaves\n' +
    //       '• The scent of a bouquet of roses sweetened with black currant Leaves',
    //     rating: 4.7,
    //     link: 'https://www.amazon.com/Diptyque-11046u-Baies-Candle-6-5-oz/dp/B00429KMH6/ref=sxin_11_hip-asp-01_980895a56449fae2fcd585db21604276f0c5a0c2?cv_ct_cx=candles&dchild=1&keywords=candles&pd_rd_i=B00429KMH6&pd_rd_r=9a034025-1e63-4e98-b565-06a37335cdd4&pd_rd_w=medCe&pd_rd_wg=avaSP&pf_rd_p=dc117900-5684-47fd-b023-067e2bf4e675&pf_rd_r=T11FY6FF4VVHY3RSYHP0&qid=1614104842&sr=1-2-9e4bad12-957b-4e27-9cac-f327b63aafec'
    //   },
    //   {
    //     name: 'Chesapeake Bay Candle Scented Candle, Balance + Harmony',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/61GKZ7EYolL._AC_SY879_.jpg',
    //     description: '• Approximate burn time of 50 hours\n' +
    //       '• The soft colored frosted jar candles allow the light of the flame to shine through when burning\n' +
    //       '• Made from a natural soy wax blend and feature self-trimming wicks\n' +
    //       '• Our fragrances that are skillfully enhanced with all natural essential oils\n' +
    //       '• Designed and poured in the USA, made with ingredients from around the world\n' +
    //       '• 100% recyclable in partnership with TerraCycle',
    //     rating: 4.5,
    //     link: 'https://www.amazon.com/Chesapeake-Bay-Candle-Balance-Harmony/dp/B01N0RSCBI/ref=sr_1_21?dchild=1&keywords=candles&qid=1614104842&sr=8-21'
    //   },
    //   {
    //     name: 'Basil, Lime & Mandarin Hand Poured Soy Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/71c%2B%2BukDP-L._AC_SX679_.jpg',
    //     description: '🍃 NATURAL SOY CANDLE: We are Vegan Soy Candle. Made with Eco-friendly 100% USA Natural Soy wax from American-grown soybeans. Our candles are vegan, cruelty-free, phthalate-free, and petroleum-free.\n' +
    //       '🍃 PREMIUM SCENTS: Highly scented to fill your room with those beautiful aromas.\n' +
    //       '🍃 HANDCRAFTED: Our small team handcrafts our candles by hand. We hand-pour our candles. We pride ourselves on our meticulous craftsmanship, ethical production.\n',
    //     rating: 4.3,
    //     link: 'https://www.amazon.com/John-Scented-Candles-Highly-Lasting/dp/B07LGT433C/ref=sr_1_27?dchild=1&keywords=candles&qid=1614104842&sr=8-27'
    //   },
    //   {
    //     name: 'Village Candle Eucalyptus Mint Scented Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/51ecGkFVnFL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    //     description: '• Fragrance notes of eucalyptus leaf and spearmint\n' +
    //       '• Pure, rich, vibrant green food-grade paraffin wax fragranced by the world\'s finest scented oils\n' +
    //       '• Village Candle\'s pioneered Dual Wick Technology provides greater, consistent fragrance release, longer burn time and even wax burn with less soot\n' +
    //       '• Large premium glass jar provides 145 - 170 hours of burn time\n' +
    //       '• Every scented jar candle is designed, sourced, poured and tested at Village Candle HQ to ensure the highest quality (made in Maine, USA)',
    //     rating: 4.5,
    //     link: 'https://www.amazon.com/Village-Candle-Eucalyptus-Glass-Scented/dp/B011BKKAFC/ref=sr_1_26?dchild=1&keywords=candles&qid=1614104842&sr=8-26'
    //   },
    //   {
    //     name: 'Patchouli & Amber Scented Candles',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/81tejYOIFUL._AC_SX679_.jpg',
    //     description: '🔥 Highly Scented & Long Lasting: Infused with cozy notes of Patchouli and Amber, our aromatherapy candles will help you relax, soothe, restore & balance your body and mind. With a burn time of 45 hours, the scent of these decorative candles is long lasting!\n' +
    //       '🔥 Premium Soy Candle: Made with you and your family in mind, this 100% natural soy wax candle is non-toxic, long burning, scented with essential oils and has a 100% wood wick. Our Patchouli candle is safe for your home.\n',
    //       rating: 4.3,
    //     link: 'https://www.amazon.com/Patchouli-Scented-Candles-Relaxing-Aromatherapy/dp/B08L47T3PP/ref=sr_1_35?dchild=1&keywords=candles&qid=1614104842&sr=8-35'
    //   },
    //   {
    //     name: 'Odor Eliminating Highly Fragranced Candle',
    //     image: 'https://images-na.ssl-images-amazon.com/images/I/71GsKjzgXwL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    //     description: '• Odor Eliminating\n' +
    //       '• Up to 80 hour burn time\n' +
    //       '• High fragrance load\n' +
    //       '• A blend of FDA food grade & soy waxes\n' +
    //       '• Not tested on animals / Cruelty free',
    //     rating: 4.4,
    //     link: 'https://www.amazon.com/Diannes-Custom-Candles-Eliminating-Fragranced/dp/B07QCQMZRQ/ref=sr_1_42?dchild=1&keywords=candles&qid=1614104842&sr=8-42'
    //   }
    // ];
  }

  show(num:number) {
    if (num === 1) {
      this.currentList = 1;
    }
    else if (num === 2) {
      this.currentList = 2;
    }
    else if (num === 3) {
      this.currentList = 3;
    }
    else if (num === 4) {
      this.currentList = 4;
    }
  }


}
