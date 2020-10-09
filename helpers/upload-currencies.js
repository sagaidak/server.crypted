const { createCurrency } = require("../graphql/resolvers/currencies")

exports.uploadCurrencies = () => {
  const data = [
    {
      sym: "DASH",
      name: "Dash (DASH)",
      icon: "/currencies/DASH.png",
      type: "crypto"
  },
  {
      sym: "ZEC",
      name: "Zcash (ZEC)",
      icon: "/currencies/ZEC.png",
      type: "crypto"
  },
  {
      sym: "USDT",
      name: "Tether Omni (USDT)",
      icon: "/currencies/USDT.png",
      type: "crypto"
  },
  {
      sym: "USDTERC",
      name: "Tether ERC20 (USDT)",
      icon: "/currencies/USDTERC.png",
      type: "crypto"
  },
  {
      sym: "USDTTRC",
      name: "Tether TRC20 (USDT)",
      icon: "/currencies/USDTTRC.png",
      type: "crypto"
  },
  {
      sym: "USDC",
      name: "USD Coin (USDC)",
      icon: "/currencies/USDC.png",
      type: "crypto"
  },
  {
      sym: "TUSD",
      name: "TrueUSD (TUSD)",
      icon: "/currencies/TUSD.png",
      type: "crypto"
  },
  {
      sym: "PAX",
      name: "Paxos (PAX)",
      icon: "/currencies/PAX.png",
      type: "crypto"
  },
  {
      sym: "XEM",
      name: "NEM (XEM)",
      icon: "/currencies/XEM.png",
      type: "crypto"
  },
  {
      sym: "REP",
      name: "Augur (REP)",
      icon: "/currencies/REP.png",
      type: "crypto"
  },
  {
      sym: "NEO",
      name: "NEO (NEO)",
      icon: "/currencies/NEO.png",
      type: "crypto"
  },
  {
      sym: "EOS",
      name: "EOS (EOS)",
      icon: "/currencies/EOS.png",
      type: "crypto"
  },
  {
      sym: "IOTA",
      name: "IOTA (MIOTA)",
      icon: "/currencies/IOTA.png",
      type: "crypto"
  },
  {
      sym: "LSK",
      name: "Lisk (LSK)",
      icon: "/currencies/LSK.png",
      type: "crypto"
  },
  {
      sym: "ADA",
      name: "Cardano (ADA)",
      icon: "/currencies/ADA.png",
      type: "crypto"
  },
  {
      sym: "XLM",
      name: "Stellar (XLM)",
      icon: "/currencies/XLM.png",
      type: "crypto"
  },
  {
      sym: "BCN",
      name: "Bytecoin (BCN)",
      icon: "/currencies/BCN.png",
      type: "crypto"
  },
  {
      sym: "TRX",
      name: "TRON (TRX)",
      icon: "/currencies/TRX.png",
      type: "crypto"
  },
  {
      sym: "WAVES",
      name: "Waves (WAVES)",
      icon: "/currencies/WAVES.png",
      type: "crypto"
  },
  {
      sym: "OMG",
      name: "OmiseGO (OMG)",
      icon: "/currencies/OMG.png",
      type: "crypto"
  },
  {
      sym: "XVG",
      name: "Verge (XVG)",
      icon: "/currencies/XVG.png",
      type: "crypto"
  },
  {
      sym: "ZRX",
      name: "0x (ZRX)",
      icon: "/currencies/ZRX.png",
      type: "crypto"
  },
  {
      sym: "BNB",
      name: "Binance Coin (BNB)",
      icon: "/currencies/BNB.png",
      type: "crypto"
  },
  {
      sym: "ICX",
      name: "ICON (ICX)",
      icon: "/currencies/ICX.png",
      type: "crypto"
  },
  {
      sym: "KMD",
      name: "Komodo (KMD)",
      icon: "/currencies/KMD.png",
      type: "crypto"
  },
  {
      sym: "BTT",
      name: "BitTorrent (BTT)",
      icon: "/currencies/BTT.png",
      type: "crypto"
  },
  {
      sym: "BAT",
      name: "BAT (BAT)",
      icon: "/currencies/BAT.png",
      type: "crypto"
  },
  {
      sym: "ONT",
      name: "Ontology (ONT)",
      icon: "/currencies/ONT.png",
      type: "crypto"
  },
  {
      sym: "QTUM",
      name: "Qtum (QTUM)",
      icon: "/currencies/QTUM.png",
      type: "crypto"
  },
  {
      sym: "LINK",
      name: "Chainlink (LINK)",
      icon: "/currencies/LINK.png",
      type: "crypto"
  },
  {
      sym: "ATOM",
      name: "Cosmos (ATOM)",
      icon: "/currencies/ATOM.png",
      type: "crypto"
  },
  {
      sym: "XTZ",
      name: "Tezos (XTZ)",
      icon: "/currencies/XTZ.png",
      type: "crypto"
  },
  {
      sym: "QWRUB",
      name: "QIWI RUB",
      icon: "/currencies/QWRUB.png",
      type: "electro"
  },
  {
      sym: "QWUSD",
      name: "QIWI USD",
      icon: "/currencies/QWUSD.png",
      type: "electro"
  },
  {
      sym: "QWEUR",
      name: "QIWI EUR",
      icon: "/currencies/QWEUR.png",
      type: "electro"
  },
  {
      sym: "QWKZT",
      name: "QIWI KZT",
      icon: "/currencies/QWKZT.png",
      type: "electro"
  },
  {
      sym: "YAMRUB",
      name: "Яндекс.Деньги",
      icon: "/currencies/YAMRUB.png",
      type: "electro"
  },
  {
      sym: "WMZ",
      name: "WMZ",
      icon: "/currencies/WMZ.png",
      type: "electro"
  },
  {
      sym: "WMR",
      name: "WMR",
      icon: "/currencies/WMR.png",
      type: "electro"
  },
  {
      sym: "WME",
      name: "WME",
      icon: "/currencies/WME.png",
      type: "electro"
  },
  {
      sym: "WMU",
      name: "WMU",
      icon: "/currencies/WMU.png",
      type: "electro"
  },
  {
      sym: "WMB",
      name: "WMB",
      icon: "/currencies/WMB.png",
      type: "electro"
  },
  {
      sym: "WMK",
      name: "WMK",
      icon: "/currencies/WMK.png",
      type: "electro"
  },
  {
      sym: "WMG",
      name: "WMG",
      icon: "/currencies/WMG.png",
      type: "electro"
  },
  {
      sym: "WMX",
      name: "WMX",
      icon: "/currencies/WMX.png",
      type: "electro"
  },
  {
      sym: "PMRUSD",
      name: "Paymer USD",
      icon: "/currencies/PMRUSD.png",
      type: "electro"
  },
  {
      sym: "PMRRUB",
      name: "Paymer RUB",
      icon: "/currencies/PMRRUB.png",
      type: "electro"
  },
  {
      sym: "PMUSD",
      name: "Perfect Money USD",
      icon: "/currencies/PMUSD.png",
      type: "electro"
  },
  {
      sym: "PMEUR",
      name: "Perfect Money EUR",
      icon: "/currencies/PMEUR.png",
      type: "electro"
  },
  {
      sym: "PMBTC",
      name: "Perfect Money BTC",
      icon: "/currencies/PMBTC.png",
      type: "electro"
  },
  {
      sym: "PMVUSD",
      name: "PM e-Voucher USD",
      icon: "/currencies/PMVUSD.png",
      type: "electro"
  },
  {
      sym: "PPUSD",
      name: "PayPal USD",
      icon: "/currencies/PPUSD.png",
      type: "electro"
  },
  {
      sym: "PPRUB",
      name: "PayPal RUB",
      icon: "/currencies/PPRUB.png",
      type: "electro"
  },
  {
      sym: "PPEUR",
      name: "PayPal EUR",
      icon: "/currencies/PPEUR.png",
      type: "electro"
  },
  {
      sym: "PPGBP",
      name: "PayPal GBP",
      icon: "/currencies/PPGBP.png",
      type: "electro"
  },
  {
      sym: "ADVCUSD",
      name: "Advanced Cash USD",
      icon: "/currencies/ADVCUSD.png",
      type: "electro"
  },
  {
      sym: "ADVCRUB",
      name: "Advanced Cash RUB",
      icon: "/currencies/ADVCRUB.png",
      type: "electro"
  },
  {
      sym: "ADVCEUR",
      name: "Advanced Cash EUR",
      icon: "/currencies/ADVCEUR.png",
      type: "electro"
  },
  {
      sym: "ADVCUAH",
      name: "Advanced Cash UAH",
      icon: "/currencies/ADVCUAH.png",
      type: "electro"
  },
  {
      sym: "ADVCKZT",
      name: "Advanced Cash KZT",
      icon: "/currencies/ADVCKZT.png",
      type: "electro"
  },
  {
      sym: "PRUSD",
      name: "Payeer USD",
      icon: "/currencies/PRUSD.png",
      type: "electro"
  },
  {
      sym: "PRRUB",
      name: "Payeer RUB",
      icon: "/currencies/PRRUB.png",
      type: "electro"
  },
  {
      sym: "PREUR",
      name: "Payeer EUR",
      icon: "/currencies/PREUR.png",
      type: "electro"
  },
  {
      sym: "SKLUSD",
      name: "Skrill USD",
      icon: "/currencies/SKLUSD.png",
      type: "electro"
  },
  {
      sym: "SKLEUR",
      name: "Skrill EUR",
      icon: "/currencies/SKLEUR.png",
      type: "electro"
  },
  {
      sym: "SKLGBP",
      name: "Skrill GBP",
      icon: "/currencies/SKLGBP.png",
      type: "electro"
  },
  {
      sym: "IDAMD",
      name: "Idram",
      icon: "/currencies/IDAMD.png",
      type: "electro"
  },
  {
      sym: "PAXUMUSD",
      name: "Paxum",
      icon: "/currencies/PAXUMUSD.png",
      type: "electro"
  },
  {
      sym: "CPTSUSD",
      name: "Capitalist USD",
      icon: "/currencies/CPTSUSD.png",
      type: "electro"
  },
  {
      sym: "CPTSRUB",
      name: "Capitalist RUB",
      icon: "/currencies/CPTSRUB.png",
      type: "electro"
  },
  {
      sym: "NTLRUSD",
      name: "Neteller USD",
      icon: "/currencies/NTLRUSD.png",
      type: "electro"
  },
  {
      sym: "NTLREUR",
      name: "Neteller EUR",
      icon: "/currencies/NTLREUR.png",
      type: "electro"
  },
  {
      sym: "PSRUSD",
      name: "PaySera USD",
      icon: "/currencies/PSRUSD.png",
      type: "electro"
  },
  {
      sym: "PSREUR",
      name: "PaySera EUR",
      icon: "/currencies/PSREUR.png",
      type: "electro"
  },
  {
      sym: "PSCEUR",
      name: "PaySafeCard",
      icon: "/currencies/PSCEUR.png",
      type: "electro"
  },
  {
      sym: "APLPRUB",
      name: "Apple Pay",
      icon: "/currencies/APLPRUB.png",
      type: "electro"
  },
  {
      sym: "NIXUSD",
      name: "NixMoney USD",
      icon: "/currencies/NIXUSD.png",
      type: "electro"
  },
  {
      sym: "NIXEUR",
      name: "NixMoney EUR",
      icon: "/currencies/NIXEUR.png",
      type: "electro"
  },
  {
      sym: "GMUAH",
      name: "GlobalMoney",
      icon: "/currencies/GMUAH.png",
      type: "electro"
  },
  {
      sym: "VLSPUSD",
      name: "VelesPay",
      icon: "/currencies/VLSPUSD.png",
      type: "electro"
  },
  {
      sym: "EPAYUSD",
      name: "Epay USD",
      icon: "/currencies/EPAYUSD.png",
      type: "electro"
  },
  {
      sym: "EPAYEUR",
      name: "Epay EUR",
      icon: "/currencies/EPAYEUR.png",
      type: "electro"
  },
  {
      sym: "PPC",
      name: "Peercoin (PPC)",
      icon: "/currencies/PPC.png",
      type: "electro"
  },
  {
      sym: "PPC",
      name: "Peercoin (PPC)",
      icon: "/currencies/PPC.png",
      type: "electro"
  },
  {
      sym: "ALPCNY",
      name: "Alipay",
      icon: "/currencies/ALPCNY.png",
      type: "electro"
  },
  {
      sym: "EPSVUSD",
      name: "ePayService",
      icon: "/currencies/EPSVUSD.png",
      type: "electro"
  },
  {
      sym: "MWRUB",
      name: "Счет телефона RUB",
      icon: "/currencies/MWRUB.png",
      type: "electro"
  },
  {
      sym: "MWUAH",
      name: "Счет телефона UAH",
      icon: "/currencies/MWUAH.png",
      type: "electro"
  },
  {
      sym: "TRDUSD",
      name: "Криптобиржи USD",
      icon: "/currencies/TRDUSD.png",
      type: "exchange"
  },
  {
      sym: "TRDEUR",
      name: "Криптобиржи EUR",
      icon: "/currencies/TRDEUR.png",
      type: "exchange"
  },
  {
      sym: "EXMUSD",
      name: "Exmo USD",
      icon: "/currencies/EXMUSD.png",
      type: "exchange"
  },
  {
      sym: "EXMRUB",
      name: "Exmo RUB",
      icon: "/currencies/EXMRUB.png",
      type: "exchange"
  },
  {
      sym: "EXMEUR",
      name: "Exmo EUR",
      icon: "/currencies/EXMEUR.png",
      type: "exchange"
  },
  {
      sym: "EXMUAH",
      name: "Exmo UAH",
      icon: "/currencies/EXMUAH.png",
      type: "exchange"
  },
  {
      sym: "EXMBTC",
      name: "Exmo BTC",
      icon: "/currencies/EXMBTC.png",
      type: "exchange"
  },
  {
      sym: "LVCNUSD",
      name: "LiveCoin USD",
      icon: "/currencies/LVCNUSD.png",
      type: "exchange"
  },
  {
      sym: "LVCNRUB",
      name: "LiveCoin RUB",
      icon: "/currencies/LVCNRUB.png",
      type: "exchange"
  },
  {
      sym: "CRXUSD",
      name: "Cryptex",
      icon: "/currencies/CRXUSD.png",
      type: "exchange"
  },
  {
      sym: "KUNAUAH",
      name: "Kuna",
      icon: "/currencies/KUNAUAH.png",
      type: "exchange"
  },
  {
      sym: "SBERRUB",
      name: "Сбербанк",
      icon: "/currencies/SBERRUB.png",
      type: "bank"
  },
  {
      sym: "ACRUB",
      name: "Альфа-Банк",
      icon: "/currencies/ACRUB.png",
      type: "bank"
  },
  {
      sym: "ACCUSD",
      name: "Альфа cash-in USD",
      icon: "/currencies/ACCUSD.png",
      type: "bank"
  },
  {
      sym: "ACCRUB",
      name: "Альфа cash-in RUB",
      icon: "/currencies/ACCRUB.png",
      type: "bank"
  },
  {
      sym: "TCSBRUB",
      name: "Тинькофф",
      icon: "/currencies/TCSBRUB.png",
      type: "bank"
  },
  {
      sym: "TCSBCRUB",
      name: "ТКС cash-in",
      icon: "/currencies/TCSBCRUB.png",
      type: "bank"
  },
  {
      sym: "TCSBQRUB",
      name: "ТКС QR-коды",
      icon: "/currencies/TCSBQRUB.png",
      type: "bank"
  },
  {
      sym: "PPC",
      name: "ВТБ",
      icon: "/currencies/PPC.png",
      type: "bank"
  },
  {
      sym: "RUSSTRUB",
      name: "Русский Стандарт",
      icon: "/currencies/RUSSTRUB.png",
      type: "bank"
  },
  {
      sym: "AVBRUB",
      name: "Авангард",
      icon: "/currencies/AVBRUB.png",
      type: "bank"
  },
  {
      sym: "PSBRUB",
      name: "Промсвязьбанк",
      icon: "/currencies/PSBRUB.png",
      type: "bank"
  },
  {
      sym: "GPBRUB",
      name: "Газпромбанк",
      icon: "/currencies/GPBRUB.png",
      type: "bank"
  },
  {
      sym: "KUKRUB",
      name: "Кукуруза",
      icon: "/currencies/KUKRUB.png",
      type: "bank"
  },
  {
      sym: "RFBRUB",
      name: "Райффайзен",
      icon: "/currencies/RFBRUB.png",
      type: "bank"
  },
  {
      sym: "RNKBRUB",
      name: "РНКБ",
      icon: "/currencies/RNKBRUB.png",
      type: "bank"
  },
  {
      sym: "OPNBRUB",
      name: "Открытие",
      icon: "/currencies/OPNBRUB.png",
      type: "bank"
  },
  {
      sym: "RKTBRUB",
      name: "Рокетбанк",
      icon: "/currencies/RKTBRUB.png",
      type: "bank"
  },
  {
      sym: "POSTBRUB",
      name: "Почта Банк",
      icon: "/currencies/POSTBRUB.png",
      type: "bank"
  },
  {
      sym: "RSHBRUB",
      name: "Россельхозбанк",
      icon: "/currencies/RSHBRUB.png",
      type: "bank"
  },
  {
      sym: "ROSBRUB",
      name: "Росбанк",
      icon: "/currencies/ROSBRUB.png",
      type: "bank"
  },
  {
      sym: "MTSBRUB",
      name: "МТС Банк",
      icon: "/currencies/MTSBRUB.png",
      type: "bank"
  },
  {
      sym: "P24USD",
      name: "Приват 24 USD",
      icon: "/currencies/P24USD.png",
      type: "bank"
  },
  {
      sym: "P24UAH",
      name: "Приват 24 UAH",
      icon: "/currencies/P24UAH.png",
      type: "bank"
  },
  {
      sym: "RFBUAH",
      name: "Райффайзен UAH",
      icon: "/currencies/RFBUAH.png",
      type: "bank"
  },
  {
      sym: "OSDBUAH",
      name: "Ощадбанк",
      icon: "/currencies/OSDBUAH.png",
      type: "bank"
  },
  {
      sym: "USBUAH",
      name: "УкрСиббанк",
      icon: "/currencies/USBUAH.png",
      type: "bank"
  },
  {
      sym: "PMBBUAH",
      name: "ПУМБ",
      icon: "/currencies/PMBBUAH.png",
      type: "bank"
  },
  {
      sym: "MONOBUAH",
      name: "Монобанк",
      icon: "/currencies/MONOBUAH.png",
      type: "bank"
  },
  {
      sym: "SBERUAH",
      name: "Сбербанк UAH",
      icon: "/currencies/SBERUAH.png",
      type: "bank"
  },
  {
      sym: "ACUAH",
      name: "Альфа-Банк UAH",
      icon: "/currencies/ACUAH.png",
      type: "bank"
  },
  {
      sym: "BLRBBYN",
      name: "Беларусбанк",
      icon: "/currencies/BLRBBYN.png",
      type: "bank"
  },
  {
      sym: "KKBKZT",
      name: "Казкоммерцбанк",
      icon: "/currencies/KKBKZT.png",
      type: "bank"
  },
  {
      sym: "HLKBKZT",
      name: "HalykBank",
      icon: "/currencies/HLKBKZT.png",
      type: "bank"
  },
  {
      sym: "SBERKZT",
      name: "Сбербанк KZT",
      icon: "/currencies/SBERKZT.png",
      type: "bank"
  },
  {
      sym: "FRTBKZT",
      name: "ForteBank",
      icon: "/currencies/FRTBKZT.png",
      type: "bank"
  },
  {
      sym: "KSPBKZT",
      name: "Kaspi Bank",
      icon: "/currencies/KSPBKZT.png",
      type: "bank"
  },
  {
      sym: "CARDUSD",
      name: "Visa/MasterCard USD",
      icon: "/currencies/CARDUSD.png",
      type: "bank"
  },
  {
      sym: "CARDRUB",
      name: "Visa/MasterCard RUB",
      icon: "/currencies/CARDRUB.png",
      type: "bank"
  },
  {
      sym: "CARDEUR",
      name: "Visa/MasterCard EUR",
      icon: "/currencies/CARDEUR.png",
      type: "bank"
  },
  {
      sym: "CARDUAH",
      name: "Visa/MasterCard UAH",
      icon: "/currencies/CARDUAH.png",
      type: "bank"
  },
  {
      sym: "CARDBYN",
      name: "Visa/MasterCard BYN",
      icon: "/currencies/CARDBYN.png",
      type: "bank"
  },
  {
      sym: "CARDKZT",
      name: "Visa/MasterCard KZT",
      icon: "/currencies/CARDKZT.png",
      type: "bank"
  },
  {
      sym: "CARDSEK",
      name: "Visa/MasterCard SEK",
      icon: "/currencies/CARDSEK.png",
      type: "bank"
  },
  {
      sym: "CARDPLN",
      name: "Visa/MasterCard PLN",
      icon: "/currencies/CARDPLN.png",
      type: "bank"
  },
  {
      sym: "CARDMDL",
      name: "Visa/MasterCard MDL",
      icon: "/currencies/CARDMDL.png",
      type: "bank"
  },
  {
      sym: "CARDAMD",
      name: "Visa/MasterCard AMD",
      icon: "/currencies/CARDAMD.png",
      type: "bank"
  },
  {
      sym: "CARDGBP",
      name: "Visa/MasterCard GBP",
      icon: "/currencies/CARDGBP.png",
      type: "bank"
  },
  {
      sym: "CARDCNY",
      name: "Visa/MasterCard CNY",
      icon: "/currencies/CARDCNY.png",
      type: "bank"
  },
  {
      sym: "CARDTRY",
      name: "Visa/MasterCard TRY",
      icon: "/currencies/CARDTRY.png",
      type: "bank"
  },
  {
      sym: "AMEXUSD",
      name: "Карта AmEx",
      icon: "/currencies/AMEXUSD.png",
      type: "bank"
  },
  {
      sym: "MIRCRUB",
      name: "Карта Мир",
      icon: "/currencies/MIRCRUB.png",
      type: "bank"
  },
  {
      sym: "UPCNY",
      name: "Карта UnionPay",
      icon: "/currencies/UPCNY.png",
      type: "bank"
  },
  {
      sym: "UZCUZS",
      name: "Карта UZCARD",
      icon: "/currencies/UZCUZS.png",
      type: "bank"
  },
  {
      sym: "WIREUSD",
      name: "Любой банк USD",
      icon: "/currencies/WIREUSD.png",
      type: "bank"
  },
  {
      sym: "WIRERUB",
      name: "Любой банк RUB",
      icon: "/currencies/WIRERUB.png",
      type: "bank"
  },
  {
      sym: "WIREEUR",
      name: "Любой банк EUR",
      icon: "/currencies/WIREEUR.png",
      type: "bank"
  },
  {
      sym: "WIREUAH",
      name: "Любой банк UAH",
      icon: "/currencies/WIREUAH.png",
      type: "bank"
  },
  {
      sym: "WIREBYN",
      name: "Любой банк BYN",
      icon: "/currencies/WIREBYN.png",
      type: "bank"
  },
  {
      sym: "WIREKZT",
      name: "Любой банк KZT",
      icon: "/currencies/WIREKZT.png",
      type: "bank"
  },
  {
      sym: "WIREGBP",
      name: "Любой банк GBP",
      icon: "/currencies/WIREGBP.png",
      type: "bank"
  },
  {
      sym: "WIRECNY",
      name: "Любой банк CNY",
      icon: "/currencies/WIRECNY.png",
      type: "bank"
  },
  {
      sym: "WIRETRY",
      name: "Любой банк TRY",
      icon: "/currencies/WIRETRY.png",
      type: "bank"
  },
  {
      sym: "WIREPLN",
      name: "Любой банк PLN",
      icon: "/currencies/WIREPLN.png",
      type: "bank"
  },
  {
      sym: "WIRETHB",
      name: "Любой банк THB",
      icon: "/currencies/WIRETHB.png",
      type: "bank"
  },
  {
      sym: "WIREINR",
      name: "Любой банк INR",
      icon: "/currencies/WIREINR.png",
      type: "bank"
  },
  {
      sym: "WIRENGN",
      name: "Любой банк NGN",
      icon: "/currencies/WIRENGN.png",
      type: "bank"
  },
  {
      sym: "SEPAEUR",
      name: "Sepa EUR",
      icon: "/currencies/SEPAEUR.png",
      type: "bank"
  },
  {
      sym: "ERIPBYN",
      name: "ЕРИП Расчет",
      icon: "/currencies/ERIPBYN.png",
      type: "bank"
  },
  {
      sym: "STLMRUB",
      name: "Счет ИП или ООО",
      icon: "/currencies/STLMRUB.png",
      type: "bank"
  },
  {
      sym: "REVBUSD",
      name: "Revolut USD",
      icon: "/currencies/REVBUSD.png",
      type: "bank"
  },
  {
      sym: "REVBEUR",
      name: "Revolut EUR",
      icon: "/currencies/REVBEUR.png",
      type: "bank"
  },
  {
      sym: "WUUSD",
      name: "WU USD",
      icon: "/currencies/WUUSD.png",
      type: "bank"
  },
  {
      sym: "WUEUR",
      name: "WU EUR",
      icon: "/currencies/WUEUR.png",
      type: "bank"
  },
  {
      sym: "WURUB",
      name: "WU RUB",
      icon: "/currencies/WURUB.png",
      type: "bank"
  },
  {
      sym: "MGUSD",
      name: "MoneyGram USD",
      icon: "/currencies/MGUSD.png",
      type: "bank"
  },
  {
      sym: "MGEUR",
      name: "MoneyGram EUR",
      icon: "/currencies/MGEUR.png",
      type: "bank"
  },
  {
      sym: "CNTUSD",
      name: "Contact USD",
      icon: "/currencies/CNTUSD.png",
      type: "bank"
  },
  {
      sym: "CNTRUB",
      name: "Contact RUB",
      icon: "/currencies/CNTRUB.png",
      type: "bank"
  },
  {
      sym: "GCMTUSD",
      name: "Золотая Корона USD",
      icon: "/currencies/GCMTUSD.png",
      type: "bank"
  },
  {
      sym: "GCMTRUB",
      name: "Золотая Корона RUB",
      icon: "/currencies/GCMTRUB.png",
      type: "bank"
  },
  {
      sym: "USTMUSD",
      name: "Юнистрим USD",
      icon: "/currencies/USTMUSD.png",
      type: "bank"
  },
  {
      sym: "USTMRUB",
      name: "Юнистрим RUB",
      icon: "/currencies/USTMRUB.png",
      type: "bank"
  },
  {
      sym: "RMTFUSD",
      name: "Ria USD",
      icon: "/currencies/RMTFUSD.png",
      type: "bank"
  },
  {
      sym: "RMTFEUR",
      name: "Ria EUR",
      icon: "/currencies/RMTFEUR.png",
      type: "bank"
  },
  {
      sym: "CASHUSD",
      name: "Наличные USD",
      icon: "/currencies/CASHUSD.png",
      type: "cash"
  },
  {
      sym: "CASHRUB",
      name: "Наличные RUB",
      icon: "/currencies/CASHRUB.png",
      type: "cash"
  },
  {
      sym: "CASHEUR",
      name: "Наличные EUR",
      icon: "/currencies/CASHEUR.png",
      type: "cash"
  },
  {
      sym: "CASHUAH",
      name: "Наличные UAH",
      icon: "/currencies/CASHUAH.png",
      type: "cash"
  },
  {
      sym: "CASHBYN",
      name: "Наличные BYN",
      icon: "/currencies/CASHBYN.png",
      type: "cash"
  },
  {
      sym: "CASHKZT",
      name: "Наличные KZT",
      icon: "/currencies/CASHKZT.png",
      type: "cash"
  }
  ]

  data.forEach(currencyInput => {
    createCurrency({currencyInput})
  })
}