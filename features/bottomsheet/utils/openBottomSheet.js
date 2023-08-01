import { actionSheetRef } from "../index";
import { modalizeRef } from "../index";

const openBottomSheet = () => {
  actionSheetRef.current?.show();
  modalizeRef.current?.open();
};

export { openBottomSheet };
