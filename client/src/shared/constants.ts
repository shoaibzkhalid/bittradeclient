export class Constants{
    private static _instance: Constants;
    public static getInstance()
    {
        if(!this._instance)
        {
            this._instance = new Constants();
        }
        return this._instance;
    }
    private constructor()
    {

    }

    static get Instance():Constants { return this.getInstance(); }

    BaseURL:string = "https://api.bitvelocity.io";//"http://localhost:1337";
    IsDev:boolean = this.BaseURL == "https://api.bitvelocity.io" ? false : true;
    SocketURL: string = "/stream";
    ResponseMessageTimeout = 4;//in seconds
    RecaptchaSiteKey = StaticConstatns.RecaptchaSiteKey;
    MaxScale = 10;
    Float = Math.pow(10, this.MaxScale);
    MaxScaleToAvoidScientificNotation = 6;
    MinScaleForClientInput = 2;
    DefaultValue = "|1|";
    LoadBriefHistoryTimeout = 15 * 1000;//15 seconds
    DefaultDateFormat = "DD/MM/YYYY";
    SmallLeters = "a-z";
    CapitalLeters = "A-Z";
    SpecialChars = "!@#\$%\^&\*_";
    Numbers = "0-9";
    public Regex = {
        MustStartWithSmallLetter: "(?=^[a-z]+)",
        MustStartWithCapitalLetter: "(?=^[A-Z]+)",
        MustStartWithLetter: "(?=^[a-zA-Z]+)",
        MustBeAlphaNumeric: "(?=^[a-zA-Z0-9_]+$)",
        MustBeAlphaNumericSmallLetters: "(?=^[a-z0-9_]+$)",
        MinLength: `(?=^.{{0},}$)`,
        MaxLength: `(?=^.{,{0}}$)`,
        RangeLength: `(?=^.{{0},{1}}$)`,
        MustContainSmallLetter: '(?=.*[' + this.SmallLeters + '])',
        MustContainCapitalLetter: '(?=.*[' + this.CapitalLeters + '])',
        MustContainNumber: '(?=.*[' + this.Numbers + '])',
        MustContainSpecialChar: '(?=.*[' + this.SpecialChars + '])',
        CannotHaveSpace: '(?=^\\S*$)',
        NumberWithDecimal: '[0-9]',
    }
    public EndPoints = {
        PostContactUs: "/contactUs/contactUs",
        PostAccountRegister: "/account/register",
        PostAuthLogin: "/auth/login",
        GetSendSignUpVerificationEmail: "/account/sendSignUpVerificationEmail",
        PostAccountVerify: "/account/verify",
        PostAccountForgotPassword: "/account/forgotPassword",
        PostAccountUpdatePassword: "/account/updatePassword",
        PostAccountPasswordRecoveryToken: "/account/verifyPasswordRecoveryToken",
        GetAuthUser: "/auth/user",
        GetLogout: "/auth/logout",
        GetCurrenciesCurrencyPairs: "/currencies/currencyPairs",
        GetTradeBriefRecentHistory: "/trade/briefRecentHistory",
        PostOrder: "/trade/order",
        PostPairDetails: "/trade/pairDetails",
        PostGetTrades: "/trade/getTrades",
        PostOrderHistory: "/trade/orderHistory",
        GetDepositableCurrencies: "/currencies/depositableCurrencies",
        PostDepositMethods: "/deposit/depositMethods",
        PostDepositRequest: "/deposit/depositRequest",
        PostDepositRequestHistory: "/deposit/depoistRequestHistory",
        PostDepositReceipt: "/deposit/receipt",
        GetStreamSocket: "/stream",
    }
    public GrantTypes = {
        Password: "password",
        RefreshToken: "refresh_token",
    }
    public LanguageKey = {
        ENUS: 'en',
        DE: 'de',
    }
    CookieKeys = {
        LangKey: 'langKey',
    }
    DefaultLangKey = this.LanguageKey.ENUS;
    public NonHeaderRoutePaths = [
        StaticConstatns.RoutePaths.Consulting
    ]
    public NonFooterRoutePaths = [
        StaticConstatns.RoutePaths.Consulting
    ]
    public RoutePaths = StaticConstatns.RoutePaths;
    public Ids = StaticConstatns.Ids;
    // {
    //     Login: StaticConstatns.RoutePaths.Login,
    //     Home: StaticConstatns.RoutePaths.Home,
    //     Trade: StaticConstatns.RoutePaths.Trade,
    //     SignUp: StaticConstatns.RoutePaths.SignUp,
    //     ContactUs: StaticConstatns.RoutePaths.ContactUs,
    //     EmailConfirmation: StaticConstatns.RoutePaths.EmailConfirmation,
    //     AccountVerify: StaticConstatns.RoutePaths.AccountVerify,
    //     AccountForgotPassword: StaticConstatns.RoutePaths.AccountForgotPassword,
    // }
    public QueryParams = {
        email: "email",
        redirectURI: "redirectURI",
        key: "key",
    }
    public RecordStatus = {
        Active: 1,
        Deleted: 2,
        PendingVerification: 3,
    }
    public Order = {
        Type: {
            limit: 1,
            market: 2,
        },
        Action: {
            buy: 1,
            sell: 2,
        },
        RecordStatus: {
            open: 1,
            cancelled: 2,
            partially_completed: 3,
            completed: 4,
        }
    }
}

export class StaticConstatns {
    static Ids = {
        HowItWorks: "how-it-works",
        OurFees: "our-fees",
    }
    public static RoutePaths = {
        Login: "/account/login",
        Home: "",
        Trade: "/exchange/trade",
        SignUp: "/account/signUp",
        ContactUs: "/help/contactUs",
        EmailConfirmation: "/account/emailConfirmation",
        AccountVerify: "/account/verify",
        AccountForgotPassword: "/account/forgotPassword",
        AccountPasswordRecovery: "/account/passwordRecovery",
        Consulting: "https://consulting.bitvelocity.io",
        Funding: "/funding",
        FundingDeposit: "/funding/deposit",
        FundingWithdrawl: "/funding/withdrawl",
    }
    public static RecaptchaSiteKey = "6Lfab3YUAAAAANbb2Lp1WYVMiwyUSCLyeZkbw5HK";
}