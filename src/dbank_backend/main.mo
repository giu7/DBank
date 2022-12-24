import Debug "mo:base/Debug";

actor DBank {
  //stbale is for persistence of the value
  stable var currentValue: Nat = 300;

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Cannot withdraw more than you own!");
    }
  };

  public query func checkBalance(): async Nat {
    return currentValue;
  };

  //topUp();
};
