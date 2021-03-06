class JquerySampleController < ApplicationController
  def jquery_sample_animation
  end

  def jquery_sample_menu
  end

  def jquery_sample_form
  end

  def jquery_sample_text
  end

  def jquery_sample_image
    @sample = {
        photo:[
            { img_src: ActionController::Base.helpers.asset_path("7/91356751_cb249cee19_o.jpg"),  title:"タイトル00"},
            { img_src: ActionController::Base.helpers.asset_path("7/91741178_f199a7d1a0_o.jpg"),  title:"タイトル01"},
            { img_src: ActionController::Base.helpers.asset_path("7/91741350_e7b97aea57_o.jpg"),  title:"タイトル02"},
            { img_src: ActionController::Base.helpers.asset_path("7/100379577_99beca500a_o.jpg"), title:"タイトル03"},
            { img_src: ActionController::Base.helpers.asset_path("7/100379776_c2239096f3_o.jpg"), title:"タイトル04"},
            { img_src: ActionController::Base.helpers.asset_path("7/107150612_93dfd5a6bb_o.jpg"), title:"タイトル05"},
            { img_src: ActionController::Base.helpers.asset_path("7/107545824_b0e6a31bbd_o.jpg"), title:"タイトル06"},
            { img_src: ActionController::Base.helpers.asset_path("7/109630285_eadfdb879f_o.jpg"), title:"タイトル07"},
            { img_src: ActionController::Base.helpers.asset_path("7/110439658_1a79abcb8a_o.jpg"), title:"タイトル08"},
            { img_src: ActionController::Base.helpers.asset_path("7/110439974_a9b1e47401_o.jpg"), title:"タイトル09"},
            { img_src: ActionController::Base.helpers.asset_path("7/111918213_0700dd016e_o.jpg"), title:"タイトル10"},
            { img_src: ActionController::Base.helpers.asset_path("7/112380508_52e3f6a65d_o.jpg"), title:"タイトル11"},
            { img_src: ActionController::Base.helpers.asset_path("7/112380571_bafbefaf86_o.jpg"), title:"タイトル12"},
            { img_src: ActionController::Base.helpers.asset_path("7/113170423_d79c3c401f_o.jpg"), title:"タイトル13"},
            { img_src: ActionController::Base.helpers.asset_path("7/114517123_f766b3bb18_o.jpg"), title:"タイトル14"},
            { img_src: ActionController::Base.helpers.asset_path("7/115259205_14439306dd_o.jpg"), title:"タイトル15"},
            { img_src: ActionController::Base.helpers.asset_path("7/115786590_5bcbf3143f_o.jpg"), title:"タイトル16"},
            { img_src: ActionController::Base.helpers.asset_path("7/115787008_3851055f71_o.jpg"), title:"タイトル17"},
            { img_src: ActionController::Base.helpers.asset_path("7/116299800_6ca88ce0d0_o.jpg"), title:"タイトル18"},
            { img_src: ActionController::Base.helpers.asset_path("7/116300018_31c9d22972_o.jpg"), title:"タイトル19"},
            { img_src: ActionController::Base.helpers.asset_path("7/116703996_640c9108bf_o.jpg"), title:"タイトル20"},
            { img_src: ActionController::Base.helpers.asset_path("7/118043866_10669ce875_o.jpg"), title:"タイトル21"},
            { img_src: ActionController::Base.helpers.asset_path("7/118688013_ed3a280043_o.jpg"), title:"タイトル22"},
            { img_src: ActionController::Base.helpers.asset_path("7/118688444_0cc9fa8415_o.jpg"), title:"タイトル23"},
            { img_src: ActionController::Base.helpers.asset_path("7/119265722_206e03235c_o.jpg"), title:"タイトル24"},
            { img_src: ActionController::Base.helpers.asset_path("7/120224176_e9acc382ac_o.jpg"), title:"タイトル25"},
            { img_src: ActionController::Base.helpers.asset_path("7/120224656_ca057adb72_o.jpg"), title:"タイトル26"},
            { img_src: ActionController::Base.helpers.asset_path("7/120679273_9d5b9f5089_o.jpg"), title:"タイトル27"},
            { img_src: ActionController::Base.helpers.asset_path("7/120679451_1605a4b530_o.jpg"), title:"タイトル28"},
            { img_src: ActionController::Base.helpers.asset_path("7/121164308_2b931ec562_o.jpg"), title:"タイトル29"},
            { img_src: ActionController::Base.helpers.asset_path("7/122506271_c9c4648bd9_o.jpg"), title:"タイトル30"},
            { img_src: ActionController::Base.helpers.asset_path("7/128781060_58912c7847_o.jpg"), title:"タイトル31"},
            { img_src: ActionController::Base.helpers.asset_path("7/128781287_d2ae62a0a1_o.jpg"), title:"タイトル32"},
            { img_src: ActionController::Base.helpers.asset_path("7/130073496_b9daa167a9_o.jpg"), title:"タイトル33"},
            { img_src: ActionController::Base.helpers.asset_path("7/136293637_01aa14e02f_o.jpg"), title:"タイトル34"},
            { img_src: ActionController::Base.helpers.asset_path("7/136293738_fcefa07e32_o.jpg"), title:"タイトル35"},
            { img_src: ActionController::Base.helpers.asset_path("7/142671818_4679cc4257_o.jpg"), title:"タイトル36"},
            { img_src: ActionController::Base.helpers.asset_path("7/147439168_4303eaf30e_o.jpg"), title:"タイトル37"},
            { img_src: ActionController::Base.helpers.asset_path("7/147439360_7025edea36_o.jpg"), title:"タイトル38"},
            { img_src: ActionController::Base.helpers.asset_path("7/2260422106_a27cc78387_o.jpg"), title:"タイトル39"}
        ]
    }

    respond_to do |format|
      format.html
      format.json
      format.xml{ render xml: @sample }
    end
  end

  def jquery_sample_modal

  end

  def jquery_sample_responsive

  end
end
