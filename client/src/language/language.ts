import { Constants } from "../shared/constants";
import { LangENUS } from "./enus";
// import { LangDE } from "./de";

export function getLanguage(lang: string): LanguageBase {
  if (!lang) {
    return new LangENUS();
  }
  switch (lang) {
    case Constants.Instance.LanguageKey.ENUS:
      return new LangENUS();

    // case Constants.LanguageKey.DE:
    // return new LangDE();

    default:
      return new LangENUS();
  }
}

export function getDefaultLanguage(): LanguageBase {
  return new LangENUS();
}

export interface LanguageBase {
  Name: string;
  Email: string;
  ContactNo: string;
  Message: string;
  Submit: string;
  InvalidEmail: string;
  MaxLengthFormat: string;
  MaxLengthFormat2: string;
  RangeLengthFormat: string;
  RangeLengthFormat2: string;
  RequiredFormat: string;
  FieldRequired: string;
  ErrorOccured: string;
  ErrorOccuredWhileValidationFormat: string;
  ErrorOccuredFormat: string;
  UUID: string;
  UUIDNotProvided: string;
  AlreadyExistsFormat: string;
  SomethingWentWrongTryAgainLater: string;
  ContactUsInsertedResponseMessage: string;
  UUIDAlreadyExists: string;
  First: string;
  Last: string;
  FirstName: string;
  LastName: string;
  User: string;
  UserName: string;
  PasswordRequirement: string[];
  AlphaNumericFormat: string;
  Password: string;
  Confirm: string;
  ConfirmPassword: string;
  DidNotMatchFormat: string;
  CapitchaErrorMessage: string;
  Company: string;
  CompanyName: string;
  UserNameRequirement: string[];
  UserNameNotAvailable: string;
  EmailAlreadyRegistered: string;
  AccountType: string;
  InvalidValueFormat: string;
  CannotStartWithNumberFormat: string;
  MustContainOneCapitalLetterFormat: string;
  MustContainOneSmallLetterFormat: string;
  MustContainOneSpecialCharFormat: string;
  MustContainOneNumberFormat: string;
  VerificationEmailSent: string;
  VerificationEmailSentAgain: string;
  Again: string;
  VerificationEmailSentDetail: string;
  Resend: string;
  ResendEmail: string;
  CouldNotVerifyClient: string;
  UnAuthorizedRequest: string;
  SignUpVerificationNotPending: string;
  Success: string;
  CouldNotSendEmailNow: string;
  EmailSentSuccessfully: string;
  UnableToCompleteYourRequest: string;
  AccountCreatedLoginToContinue: string;
  Verifying: string;
  Forgot: string;
  ForgotPassword: string;
  BitVelocity: string;
  NotJoinedBitvelocityYet: string;
  Join: string;
  Now: string;
  JoinNow: string;
  Login: string;
  Credentials: string;
  AlreadyHaveAnAccount: string;
  VerificationKey: string;
  VerificationKeyExpired: string;
  CouldNotVerifyUser: string;
  UserAlreadyVerified: string;
  RedirectingYouToLogin: string;
  SuccessfullyVerifiedUser: string;
  NotExists: string;
  NotExistsFormat: string;
  EmailVerificationRequired: string;
  Here: string;
  Invalid: string;
  InvalidFormat: string;
  Home: string;
  Blockchain: string;
  Travel: string;
  RealEstate: string;
  Charts: string;
  FAQ: string;
  AboutUs: string;
  ContactUs: string;
  Help: string;
  SignUp: string;
  Wallet: string;
  Logout: string;
  CouldNotLoadConfig: string;
  Limit: string;
  Sell: string;
  Buy: string;
  Price: string;
  Amount: string;
  Total: string;
  Action: string;
  Currency: string;
  Pair: string;
  CurrencyPair: string;
  Market: string;
  AvailableBalance: string;
  Gross: string;
  GrossTotal: string;
  Fee: string;
  Date: string;
  Type: string;
  NonVerifiedUserCannotPlaceOrder: string;
  ThisUserCannotPlaceOrder: string;
  NotFound: string;
  NotFoundFormat: string;
  Min: string;
  MinTotalOrderAmountFormat: string;
  Order: string;
  NotSupportFormat: string;
  NotEnoughBalance: string;
  MinTierRequriedForTransaction: string;
  NoRecordFound: string;
  OrderPlacedSuccessfully: string;
  LangKey: string;
  CouldNotBeginTransaction: string;
  CouldNotCompleteTransaction: string;
  CouldNotExecuteQuery: string;
  OrderCompleted: string;
  UserWalletNotFoundForOneOfThePairCurrencies: string;
  CouldNotGetResponseFromKraken: string;
  PairKrakenMinOrderVolumeNotDefined: string;
  OrderLessThanMinKrakenOrderVolume: string;
  PairMappingWithKraken: string;
  UnableToVerifyFormat: string;
  Request: string;
  OrderStatusMustBeOpenOrPartiallyCompleted: string;
  Status: string;
  Trade: string;
  UnableToCreateQueueTaskForUpdatingExchangeOrigin: string;
  TaskId: string;
  UnableToUpdateExchangeOrigin: string;
  OrderPostedOnKrakenWithoutTxId: string;
  OrderPostedOnThirdParty: string;
  OrderPostedOnThirdPartyButCouldNotItsTxid: string;
  OrderAlreadyPostedOnFormat: string;
  ExternalOrderIdNotFound: string;
  ChangeExchangeManually: string;
  CaptchaNotVerified: string;
  Filters: string;
  Origin: string;
  ExchangeOrigin: string;
  FeePercentage: string;
  RemainingAmount: string;
  From: string;
  To: string;
  PriceFrom: string;
  PriceTo: string;
  AmountFrom: string;
  AmountTo: string;
  FeePercentageFrom: string;
  FeePercentageTo: string;
  RemainingAmountFrom: string;
  RemainingAmountTo: string;
  FeeCurrency: string;
  DateRange: string;
  Created: string;
  Range: string;
  CreatedDateRange: string;
  LoginHeaderMessage: string;
  MoveTo: string;
  MoveToFormat: string;
  Target: string;
  TargetOrigin: string;
  Profile: string;
  Settings: string;
  Middle: string;
  Guardian: string;
  MiddleName: string;
  GuardianName: string;
  Relationship: string;
  GuardianRelationship: string;
  CNIC: string;
  Age: string;
  Gender: string;
  Find: string;
  FindOrder: string;
  Skype: string;
  Id: string;
  SkypeId: string;
  Budget: string;
  Consulting: string;
  Cost: string;
  You: string;
  Get: string;
  YouGet: string;
  NotAnAdminUser: string;
  OrderCancellationResponseFromThirdParty: string;
  UnableToSaveFormat: string;
  Session: string;
  Volume: string;
  LastPrice: string;
  Change: string;
  High: string;
  Low: string;
  Page: string;
  Back: string;
  BackToHome: string;
  Deposit: string;
  Withdraw: string;
  Withdrawal: string;
  SelectCurrencyTodeposit: string;
  Balance: string;
  TotalBalance: string;
  OnHold: string;
  Account: string;
  AccountName: string;
  Number: string;
  AccountNumber: string;
  Bank: string;
  BankName: string;
  Branch: string;
  IBAN: string;
  Address: string;
  Minimum: string;
  WhichEverHigherFormat: string;
  Reference: string;
  Sr: string;
  DepositRequest: string;
  DepositDate: string;
  New: string;
  NoCurrencySelected: string;
  Cancel: string;
  CreatedSuccessfullyFormat: string;
  Select: string;
  File: string;
  SelectFile: string;
  Clear: string;
  Size: string;
  SizeLimit: string;
  Exceeds: string;
  SizeLimitExceeds: string;
  AllowFileTypesAreFormat: string;
  filesSelectedFormat: string;
  Funding: string;
  Free: string;
  to: string;
  Individual: string;
  Business: string;
  Create: string;
  CreateAccount: string;
  Receipt: string;
  DepositReceipt: string;
  Method: string;
  DepositMethod: string;
  Params: string;
  MinimumAmountFormat: string;
  NotSaved: string;
  InterestedIn: string;
  Duration: string;
  FreeInitialConsultation: string;
  AreYouLookingForAReliable: string;
  SolutionProviderThatCanDeliverInTime: string;
  Transparency: string;
  Quality: string;
  Deliverables: string;
  QualityDeliverables: string;
  Flexible: string;
  Engagement: string;
  Models: string;
  FlexibleEngagementModels: string;
  Skilled: string;
  Team: string;
  SkilledTeam: string;
  Talk: string;
  Our: string;
  Experts: string;
  TalkToOurExperts: string;
  Meet: string;
  Founder: string;
  CEO: string;
  MeetFounderAndCEO: string;
  SerialEnterpreneurPara: string;
  CPP: string;
  Linux: string;
  NodeJS: string;
  InnovateSolutionsPara: string;
  Years: string;
  Highly: string;
  Experienced: string;
  Experience: string;
  HighlyExperienced: string;
  Reliable: string;
  Trustable: string;
  ReliableAndTrustable: string;
  Successful: string;
  Cooperation: string;
  SuccessfulCooperation: string;
  HowItWorks: string;
  TalkToOneofOurPara: string;
  IndustryExpertsPara: string;
  AVelocityDirectorPara: string;
  AVelocityDirectorPara2: string;
  AVelocityDirectorPara3: string;
  AllocateSuitableResource: string;
  WeWillThenAssessTheWorkLoadPara: string;
  EnsuringPromptDelivery: string;
  EnsuringPromptDeliveryPara1: string;
  EnsuringPromptDeliveryPara2: string;
  EnsuringPromptDeliveryPara3: string;
  ServicesWeDeliver: string;
  ServicesWeDeliverPara: string;
  TechnicalConsulting: string;
  TechnicalConsultingPara: string;
  ProductDevelopment: string;
  ProductDevelopmentPara: string;
  UIAndUX: string;
  UIAndUXPara: string;
  DevOps: string;
  DevOpsPara: string;
  TechnologiesPara: string;
  TechnologiesPara2: string;
  Project: string;
  Launched: string;
  ProjectLaunched: string;
  Support: string;
  Satisfied: string;
  Customers: string;
  SatisfiedCustomers: string;
  OurSoftwareDevelopmentIndustries: string;
  OurSoftwareDevelopmentIndustriesPara: string;
  BlockchainPara: string;
  Healthcare: string;
  HealthcarePara: string;
  BankingAndFinance: string;
  BankingAndFinancePara: string;
  RealTimeTradingApps1: string;
  RealTimeTradingApps2: string;
  RealTimeTradingAppsPara: string;
  Education: string;
  EducationAndELearning1: string;
  ELearning: string;
  EducationAndELearningPara: string;
  Cloud: string;
  Technologies: string;
  CloudTechnologiesPara: string;
  Automotive: string;
  AutomotivePara: string;
  Tourism: string;
  TravelAndTourism: string;
  TravelAndTourismPara: string;
  Manufacturing: string;
  ManufacturingPara: string;
  Intellectual: string;
  Property: string;
  Products: string;
  PropertyProducts: string;
  IntellectualPropertyProductsPara: string;
  Gaming: string;
  GamingPara: string;
  Media: string;
  MediaAnd: string;
  Entertainment: string;
  MediaAndEntertainmentPara: string;
  ProjectsSuccessfullyDelivery1: string;
  ProjectsSuccessfullyDelivery2: string;
  DepartureControlSystem1: string;
  DepartureControlSystem2: string;
  RealtimeRemoteControl1: string;
  RealtimeRemoteControl2: string;
  LondonUndergroundRailSimulation1: string;
  LondonUndergroundRailSimulation2: string;
  CloudGaming: string;
  CloudVirtualization: string;
  Virtualization: string;
  Lets: string;
  ContactUs1: string;
  ContactUs2: string;
  ContactUs3: string;
  ContactUs4: string;
  ContactUs5: string;
  ThankYouForContactingUs: string;
  WeHaveReceivedYourMessage: string;
  OurExpertWillBeInTouchWithYou: string;
  FahadSheikh: string;
  AngularJS: string;
  MeanStack: string;
  ReactNative: string;
  BlockchainForTravel: string;
  BlockchainForRealEstate: string;
  HTML5: string;
  CSS: string;
  ReactJS: string;
  FullStackDevelopment: string;
  MobileDevelopment: string;
  ServerDevelopment: string;
  AWS: string;
  EC2Console: string;
  ERC20Tokens: string;
  DecentralizedApps: string;
  XenServer: string;
  RealTime: string;
  Applications: string;
  RealTimeApplications: string;
  Java: string;
  ApacheTomcat: string;
  Copyrights: string;
  CopyrightsWithYear: string;
  AllRightsReserved: string;
  VelocitySolutions: string;
  OperatingUnderVelocitySolutions: string;
  CompanyNo: string;
  SignIn: string;
  Your: string;
  SignInToYourAccount: string;
  Patient: string;
  NewPatient: string;
  DateofBirth: string;
  Months: string;
  Days: string;
  Reset: string;
  Orders: string;
  SerialNo: string;
  Serial: string;
  CreatedOn: string;
  Updated: string;
  LastUpdated: string;
  CancelledOn: string;
  DepositDateRange: string;
  FeeFrom: string;
  FeeTo: string;
  OK: string;
  Alert: string;
  Details: string;
  Error: string;
  Close: string;
  DepositRequestId: string;
  UserId: string;
  Approve: string;
  Reject: string;
  AmountToFund: string;
  Fund: string;
  Other: string;
  Deduction: string;
  Deductions: string;
  OtherDeductions: string;
  Remarks: string;
  Received: string;
  AmountReceived: string;
  AmountAddedToUsersWallet: string;
  Successfully: string;
  CannotBeEmptyFormat: string;
  CurrentStatusInvalidFormat: string;
  Funded: string;
  FundedAmount: string;
  MustBeEqualToFormat: string;
  CannotBeFormat: string;
  NoAmountReceivedForDepositRequestVerification: string;
  Rejected: string;
  Approved: string;
  ApprovedSuccessfullyFormat: string;
  RejectedSuccessfullyFormat: string;
  Verified: string;
  AccountEmailIsNotVerified: string;
  AccountStatusIsFormat: string;
  Unable: string;
  UnableToSendEmail: string;
  UpdatedSuccessfullyFormat: string;
  Passwords: string;
  Cannot: string;
  Use: string;
  Previous: string;
  CannotUsePreviousPasswords: string;
  Digital: string;
  Evidence: string;
  DigitalEvidence: string;
  Verification: string;
  AccountVerification: string;
  or: string;
  QuestionMark: string;
  Crypto: string;
  Coin: string;
  CryptoCoin: string;
  LoginPageSignupPara: string;
  GetAnAccount: string;
  Exchange: string;
  Volume24H: string;
  Change24H: string;
  High24H: string;
  Low24H: string;
  History: string;
  OrderHistory: string;
  Detailed: string;
  DetailedHistory: string;
  Pending: string;
  PendingOrders: string;
  PreviousHistory: string;
  Time: string;
  Local: string;
  Recent: string;
  Trades: string;
  RecentTrades: string;
  DepositRequests: string;
  NewDepositRequest: string;
  SiteCompanyName: string;
  English: string;
  German: string;
  Terms: string;
  TermsOfUse: string;
  Conditions: string;
  I: string;
  IAgree: string;
  Agree: string;
  Please: string;
  Wait: string;
  PleaseWait: string;
  at: string;
  Calculator: string;
  CurrencyCalculator: string;
  MainPageHeader: string;
  Expert: string;
  ExpertSupport: string;
  ExpertSupportPara: string;
  Safe: string;
  Secure: string;
  SafeAndSecurePara: string;
  Fees: string;
  Advanced: string;
  Ordering: string;
  AdvancedOrdering: string;
  AdvancedOrderingPara: string;
  Reliability: string;
  ReliabilityPara: string;
  Offline: string;
  Storage: string;
  OfflineStorage: string;
  OfflineStoragePara: string;
  Standard: string;
  Register: string;
  RegisterPara: string;
  KYC: string;
  GetKYCVerifiedPara: string;
  Make: string;
  Fiat: string;
  Debit: string;
  Credit: string;
  Card: string;
  MakeFiatDepositPara: string;
  Start: string;
  Buying: string;
  StartBuyingPara: string;
  GetKYCVerified: string;
  MakeFiatDeposit: string;
  RegisterDebitCreditCard: string;
  StartBuying: string;
  How: string;
  Trading: string;
  StartTradingNow: string;
  Brief: string;
  BriefHistory: string;
  MapComponentHeading: string;
  MapComponentPara: string;
  Part: string;
  PartBuying: string;
  PartBuyingPara: string;
  SupportPara: string;
  API: string;
  APIPara: string;
  Feature: string;
  Features: string;
  Manage: string;
  Wallets: string;
  ManageWallets: string;
  Explore: string;
  Security: string;
  Statistics: string;
  MarketStatistics: string;
  Center: string;
  SupportCenter: string;
  Knowledge: string;
  Base: string;
  KnowledgeBase: string;
  Social: string;
  OurFees: string;
  ForgotYourPassword: string;
  ForgotYourPasswordPara: string;
  Recovery: string;
  PasswordRecoveryEmailSentPara: string;
  PasswordRecovery: string;
  Set: string;
  SetNewPassword: string;
  Update: string;
  Token: string;
  Try: string;
  Warning: string;
  My: string;
  MyAccount: string;
  Selection: string;
  AccountTypeSelection: string;
  Proof: string;
  Identity: string;
  Income: string;
  ProofOfIdentity: string;
  ProofOfAddress: string;
  ProofOfIncome: string;
  AccountForAnIndividual: string;
  AccountForBusiness: string;
  ProofOfBusiness: string;
  Verify: string;
  BusinessName: string;
  Incorporation: string;
  DateOfIncorporation: string;
  Country: string;
  Operation: string;
  CountryOfOperation: string;
  Birth: string;
  BirthDate: string;
  Submitted: string;
  NotSubmitted: string;
  Not: string;
  NotVerified: string;
  Nationality: string;
  Personal: string;
  Information: string;
  PersonalInformation: string;
  Basic: string;
  BasicInformation: string;
  Next: string;
  Passport: string;
  National: string;
  NationalIdentityCard: string;
  Resident: string;
  Permit: string;
  ResidentPermit: string;
  Driving: string;
  License: string;
  DrivingLicense: string;
  Statement: string;
  BankStatement: string;
  Utility: string;
  Bill: string;
  Bills: string;
  UtilityBill: string;
  Wages: string;
  Slip: string;
  WagesSlip: string;
  Certification: string;
  Certificate: string;
  BusinessIncorporationCertificate: string;
  Memorandum: string;
  Association: string;
  MemorandumOfAssociation: string;
  Tax: string;
  Document: string;
  Documents: string;
  TaxDocument: string;
  Picture: string;
  Front: string;
  FrontPicture: string;
  BackPicture: string;
  Attachment: string;
  Attachments: string;
  atLeast: string;
  Section: string;
  Sections: string;
  SelectatLeastsectionsFormat: string;
  SelectatLeastdocumentsFormat: string;
  SelectDocumentType: string;
  Click: string;
  Drag: string;
  Upload: string;
  ClickOrDragFileToUpload: string;
  PleaseTryAgain: string;
  SomethingWentWrong: string;
  MaxAttachmentSizeFormat: string;
  Expired: string;
  SessionExpired: string;
  ProofsAttachmentAlert: string;
  Post: string;
  Postal: string;
  Code: string;
  PostalCode: string;
  City: string;
  ExpectedAmountOfInvestment: string;
  PerMonth: string;
  IncomePerMonth: string;
  MaximumAttachmentsAllowedForRequirementFormat: string;
  Maximum: string;
  MinimumAttachmentsRequirementFormat: string;
  ErrorOccuredWhileSavingFormat: string;
  While: string;
  Saving: string;
  Partially: string;
  PartiallyApproved: string;
  PartiallyVerified: string;
  PartiallySubmitted: string;
  Review: string;
  Higher: string;
  Limits: string;
  HigherDepositAndWithdrawalLimits: string;
  BankAccount: string;
  WithdrawalRequest: string;
  Currencies: string;
  CryptoCurrencies: string;
  FiatCurrencies: string;
  WithdrawalRequests: string;
  Add: string;
  AddBankAccount: string;
  BranchCode: string;
  Saved: string;
  SavedSuccessfully: string;
  NewBankAccountAlert: string;
  WithdrawalMethod: string;
  Daily: string;
  Monthly: string;
  DailyLimit: string;
  MonthlyLimit: string;
  ExchangeFee: string;
  ThirdParty: string;
  ThirdPartyFee: string;
  Charges: string;
  BankCharges: string;
  Logon: string;
  LastLogon: string;
  Current: string;
  CurrentSession: string;
  CurrentTime: string;
  UpdatePicture: string;

  //SUPPORT CENTER//
  Money: string;
  Transfer: string;
  Appliction: string;
  Bugs: string;
  Reporting: string;
  Authentication: string;
  Issues: string;
  title: string;

  ///////////////////////////////////////////////////////////
  //BLOCKCHAIN////////////
  // TravelPaper: string
  BlockChainPageCaption: string;
  Introduction: string;
  TravelPaperHeading1: string;
  TravelPaperHeading2: string;
  TravelPaperHeading3: string;
  TravelPaperHeading4: string;
  TravelPaperPara1: string;
  TravelPaperPara2: string;
  TravelPaperPara3: string;
  TravelPaperPara4: string;

  RealEstatePaperHeading1: string;
  RealEstatePaperHeading2: string;
  RealEstatePaperHeading3: string;
  RealEstatePaperHeading4: string;
  RealEstatePaperHeading5: string;
  RealEstatePaperPara1: string;
  RealEstatePaperPara2: string;
  RealEstatePaperPara3: string;
  RealEstatePaperPara4: string;
  RealEstatePaperPara5: string;
  ////////////////////////////////////////////////////////////////////////////////

  // COMPANY ROADMAP/////////////////////////
  //YEARS
  twoThousandSixteen: string;
  twoThousandSeventeen: string;
  twoThousandEighteen: string;
  twoThousandNineteen: string;
  twoThousandTwenty: string;
  //QUATERS
  quater1: string;
  quater2: string;
  quater3: string;
  quater4: string;
  //TITLES
  Incorporated: string;
  Seed: string;
  Completed: string;
  Design: string;
  Technical: string;
  Architecture: string;
  Liquidity: string;
  Partners: string;
  Agreement: string;
  Signed: string;
  Offering: string;
  Whitepaper: string;
  Development: string;
  DAT: string;
  Platform: string;
  Available: string;
  Public: string;
  Asset: string;
  Live: string;
  Companies: string;
  Investors: string;
  ExchangeDesign: string;
  TechnicalDesign: string;
  SeedFundingCompleted: string;
  Completion: string;
  LiquidityPartners: string;
  SecurityTokenOffering: string;
  DigitalAssetTrading: string;
  DATPlatformAvailable: string;
  EMoneyLicense: string;
  STOPlatformDevelopment: string;
  STOPlatformDevelopmentLive: string;
  AboutHeading: string;

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////FAQ/////////////////////////
  Payment: string;
  Privacy: string;
  Getting: string;
  Started: string;
  Managment: string;

  GSQuestion1: string;
  GSQuestion2: string;
  GSQuestion3: string;
  GSQuestion4: string;
  GSAnswer1: string;
  GSAnswer2: string;
  GSAnswer3: string;
  GSAnswer4: string;
  AMQuestion1: string;
  AMQuestion2: string;
  AMQuestion3: string;
  AMAnswer1: string;
  AMAnswer2: string;
  AMAnswer3: string;
  TradeQuestion1: string;
  TradeQuestion2: string;
  TradeQuestion3: string;
  TradeAnswer1: string;
  TradeAnswer2: string;
  TradeAnswer3: string;
  FeesQuestion1: string;
  FeesQuestion2: string;
  FeesQuestion3: string;
  FeesAnswer1: string;
  FeesAnswer2: string;
  FeesAnswer3: string;
  SecurityQuestion1: string;
  SecurityQuestion2: string;
  SecurityQuestion3: string;
  SecurityAnswer1: string;
  SecurityAnswer2: string;
  SecurityAnswer3: string;
  PayQuestion1: string;
  PayQuestion2: string;
  PayQuestion3: string;
  PayAnswer1: string;
  PayAnswer2: string;
  PayAnswer3: string;
  ////////////////////////////////////////////////////////////////////////////////
  InvestorZonePara: string;
  STO: string;
  TradeDemo: string;
  InvestorsZone: string;
  Withdrawl: string;
  SubmitAComplaint: string;
  Phone: string;
  Mobile: string;
  Articles: string;
  BitVelocityMail: string;
  Contact: string;
  Roadmap: string;
  SupportIntro: string;
  SupportIntroPara: string;
  Popular: string;
  ArticleHeading1: string;
  ArticleHeading2: string;
  BitVelocityPhone: string;
  BitVelocityMobile: string;

  SecurityIntroPara: string;
  TwoFactorAuthHeading: string;
  TwoFactorAuthPara: string;
  DDosHeading: string;
  DDosPara: string;
  OfflineStoragePara1: string;
  Multisig: string;
  MultisigWalletPara: string;
  Today: string;
  SaveMoney1: string;
  SaveMoney2: string;
  SaveMoney3: string;

  Mission: string;
  AboutIntroPara: string;
  AboutMission: string;
  Why: string;
  Bit: string;
  Velocity: string;
  Tokenization: string;
  AI: string;
  TA: string;
  Forecast: string;
  Tools: string;

  AboutPara1: string;
  AboutPara2: string;
  AboutPara3: string;
  AboutPara4: string;
  AboutPara5: string;
  AboutPara6: string;
  CEOPara: string;
  TeamPara: string;

  FeeLine1: string;
  FeeLine2: string;
  FeeLine3: string;
  FeeLine4: string;
  FeeFooter: string;

  DontHaveAccount: string;
  ////////////////////////////---TERMS & CONDITIONS---////////////////////////////////////////////
  TermsAndConditions: string;
  PrivacyPolicy: string;
  And: string;
  TermsContent: string;

  TermsHeading1: string;
  TermsHeading2: string;
  TermsHeading3: string;
  TermsHeading4: string;
  TermsHeading5: string;
  TermsHeading6: string;
  TermsHeading7: string;
  TermsHeading8: string;
  TermsHeading9: string;
  TermsHeading10: string;
  TermsHeading11: string;
  TermsHeading12: string;
  TermsHeading13: string;
  TermsHeading14: string;
  TermsHeading15: string;
  TermsHeading16: string;
  TermsHeading17: string;
  TermsHeading18: string;
  TermsHeading19: string;
  TermsHeading20: string;
  TermsHeading21: string;
  TermsHeading22: string;
  TermsHeading23: string;
  TermsHeading24: string;
  TermsHeading25: string;
  TermsHeading26: string;
  TermsHeading27: string;
  TermsHeading28: string;
  TermsHeading29: string;
  TermsHeading30: string;
  TermsHeading31: string;
  TermsHeading32: string;
  TermsHeading33: string;
  TermsHeading34: string;
  TermsHeading35: string;
  TermsHeading36: string;
  TermsHeading37: string;
  TermsHeading38: string;
  TermsHeading39: string;
  TermsHeading40: string;
  TermsHeading41: string;
  TermsHeading42: string;
  TermsHeading43: string;

  TermsPara1: string;
  TermsPara2: string;
  TermsPara3: string;
  TermsPara4: string;
  TermsPara5: string;
  TermsPara6: string;
  TermsPara7: string;
  TermsPara8: string;
  TermsPara9: string;
  TermsPara10: string;
  TermsPara11: string;
  TermsPara12: string;
  TermsPara13: string;
  TermsPara14: string;
  TermsPara15: string;
  TermsPara16: string;
  TermsPara17: string;
  TermsPara18: string;
  TermsPara19: string;
  TermsPara20: string;
  TermsPara21: string;
  TermsPara22: string;
  TermsPara23: string;
  TermsPara24: string;
  TermsPara25: string;
  TermsPara26: string;
  TermsPara27: string;
  TermsPara28: string;
  TermsPara29: string;
  TermsPara30: string;
  TermsPara31: string;
  TermsPara32: string;
  TermsPara33: string;
  TermsPara34: string;
  TermsPara35: string;
  TermsPara36: string;
  TermsPara37: string;
  TermsPara38: string;
  TermsPara39: string;
  TermsPara40: string;
  TermsPara41: string;
  TermsPara42: string;
  TermsPara43: string;
  TermsPara44: string;
  TermsPara45: string;
  TermsPara46: string;
  TermsPara47: string;
  TermsPara48: string;
  TermsPara49: string;
  TermsPara50: string;
  TermsPara51: string;
  TermsPara52: string;
  TermsPara53: string;
  TermsPara54: string;
  TermsPara55: string;

  ////////////////////////////---PRIVACY POLICY---////////////////////////////////////////////
  PrivacyHeading1: string;
  PrivacyHeading2: string;
  PrivacyHeading3: string;
  PrivacyHeading4: string;
  PrivacyHeading5: string;
  PrivacyHeading6: string;
  PrivacyHeading7: string;
  PrivacyHeading8: string;
  PrivacyHeading9: string;
  PrivacyHeading10: string;
  PrivacyHeading11: string;
  PrivacyHeading12: string;
  PrivacyTransparencyPara: string;

  PrivacyPara11: string;
  PrivacyPara12: string;
  PrivacyPara13: string;
  PrivacyPara21: string;
  PrivacyPara22: string;
  PrivacyPara23: string;
  PrivacyPara24: string;
  PrivacyPara25: string;
  PrivacyPara26: string;
  PrivacyPara27: string;
  PrivacyPara3: string;
  PrivacyPara4: string;
  PrivacyPara5: string;
  PrivacyPara6: string;
  PrivacyPara7: string;
  PrivacyPara8: string;
  PrivacyPara9: string;
  ////////////////////////////////////////////////////////////////////////////////////////////

  Inaam: string;
  Shoaib: string;
  Senior: string;
  Junior: string;
  TeamDescription1: string;
  TeamDescription2: string;
  CompanyNumber: string;

  Loans: string;
  Shares: string;
  Funds: string;

  STOFeaturesHeading: string;
  Instant: string;
  Approval: string;
  TwentyFourHours: string;
  Easy: string;
  Application: string;
  Coming: string;
  Soon: string;
  STOPlaceholder: string;
  Google: string;
  Authenticator: string;
  GoogleAuthenticator: string;
  PasswordChange: string;
  Sensitive: string;
  SensitiveAccountSettingsChange: string;
  GoogleAuthenticatorUsedFor: string;
  Enable: string;
  Disable: string;
  TwoFactorAuthentication: string;
  Download: string;
  App: string;
  DownloadApp: string;
  Subscribe: string;
  Backup: string;
  Finish: string;
  Step: string;
  DownloadAndInstallFormat: string;
  DownloadGoogleAuthAppPara: string;
  GoogleSupport: string;
  Scan: string;
  QRCode: string;
  ScanQRCode: string;
  OR: string;
  ScanThisQRCode: string;
  EnterTokenManuallyTwoFAPara: string;
  Key: string;
  BackupKey: string;
  BackupKeyPara: string;
  Enabled: string;
  IfEnabled: string;
  SuccessfullyFormat: string;
  Disabled: string;
  DepositInstruction1: string;
  DepositInstruction2: string;
  DepositInstruction3: string;
  DepositInstruction4: string;
  DepositInstruction5: string;
  CouldNotValidateDocumentStatus: string;
  AccountVerificationIsRequiredBeforeThisTransaction: string;
  MaximumAmountForFormat: string;
  MinimumAmountForFormat: string;
  BankAccountWithSameIBAN: string;
  CurrencyType: string;
  CryptoDepositNotAvailable: string;
  CannotExceedsDailyWithdrawalLimit: string;
  CannotExceedsMonthlyWithdrawalLimit: string;
  NoAmountSentForWithdrawalRequestVerification: string;
  Sent: string;
  AmountSent: string;
  AmountChargedShouldBeLessThanOrEqualToAmount: string;
  UnableToFundAdminWalletForFee: string;
  already: string;
  enabled: string;
  AuthenticatorAlreadyEnabledFormat: string;
  AmountToCharge: string;
  AmountDeductedFromUsersWallet: string;
  IncludeBankCharges: string;
  UserGets: string;
  BankCode: string;
  BranchAddress: string;
  TotalAmountCharged: string;
  VerifiedOn: string;
  CreatedUserId: string;
  Proofs: string;
  DocumentId: string;
  Field: string;
  Fields: string;
  Properties: string;
  LastApproved: string;
  Attempt: string;
  CurrentAttempt: string;
  Open: string;
  Tab: string;
  NewTab: string;
  OpenInNewTab: string;
  Requests: string;
  VerifiedBy: string;
  Preference: string;
  Preferences: string;
  Save: string;
  Default: string;
  DefaultCurrency: string;
  DefaultCurrencyPair: string;
  When: string;
  Fulfilled: string;
  OnSuccessfulDeposit: string;
  OnSuccessfulWithdrawal: string;
  WhenOrderFulfilled: string;
  OnDepositVerification: string;
  OnWithdrawalVerification: string;
  OnOrderFulfilled: string;
  Defaults: string;
  Yes: string;
  No: string;
  OnOrderExecution: string;
  OnWithdrawal: string;
  Notification: string;
  Zone: string;
  TimeZone: string;
  Preferred: string;
  PreferredTimeZone: string;
  PhoneNumber: string;
  Added: string;
  NotAdded: string;
  EnterVerificationCodeForContactPara: string;
  DidNot: string;
  Receive: string;
  SMS: string;
  DidNotReceiveSMS: string;
  VerificationCodeResent: string;
  Sort: string;
  SortCode: string;
  IncludeReferenceOnDepositPara: string;
  ChangePassword: string;
  ChangePasswordBlockPara: string;

  ExpiredFormat: string;
  PleaseRequestNewOne: string;
  VerificationCode: string;
  VerificationCodeTextMessageFormat: string;

  SupportEmail: string;

  /////////////////////////////////////----STO------/////////////////////////////////////////////
  STOIntroHeading: string;
  STOintroPara: string;
  STOFeature1: string;
  STOFeature2: string;
  STOFeature3: string;
  STOPara2: string;
  STOHeading2: string;
  STOPlatformPara1: string;
  STOPlatformPara2: string;
  STOPlatformPara3: string;

  STOAssetsHeading: string;
  STOAssetsHeadingPara: string;
  STOAssetsSubHeading1: string;
  STOAssetsSubHeading2: string;
  STOAssetsSubHeadingPara1: string;
  STOAssetsSubHeadingPara2: string;

  STOHowWorksHeading: string;
  STOAIPara: string;

  Shareholding: string;
  STOPlatformsHeading: string;
  ICO: string;
  Equity: string;
  Crowdfunding: string;
  Automated: string;
  Investment: string;
  Process: string;
  The: string;
  Unverified: string;

  //////////////////---------------------MessageBox-----------------/////////////////////////////////////
  NoPhoneHeading: string;
  NoPhonePara1: string;
  NoPhonePara2: string;

  NoPhoneLi11: string;
  NoPhoneLi12: string;
  NoPhoneLi21: string;
  NoPhoneLi22: string;
  NoPhoneLi3: string;

  TwoFAIncompleteHeading: string;
  TwoFAIncompletePara1: string;
  TwoFAIncompletePara2: string;

  TwoFAIncompleteLi11: string;
  TwoFAIncompleteLi12: string;

  TwoFAIncompleteLi21: string;
  TwoFAIncompleteLi22: string;

  KYCUnverifiedPara1: string;
  KYCUnverifiedLi1: string;
  KYCUnverifiedLi2: string;
  KYCUnverifiedLi3: string;

  About: string;
  Lead: string;
  David: string;
  Watkins: string;

}
