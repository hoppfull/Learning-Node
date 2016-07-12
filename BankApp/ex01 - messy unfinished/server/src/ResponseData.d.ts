interface ILoginResponse extends IOk, ISession, IAccount { }

interface IRegisterResponse extends IOk { }

interface IWithdrawalResponse extends IOk, IAccount { }

interface IDepositionResponse extends IOk, IAccount { }
