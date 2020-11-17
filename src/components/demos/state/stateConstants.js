export const INITIALSTATE_MENU = {
  participants: [],
  customers: [],
  courses: [],
  loading: true,
};

export const INITIALSTATE_CUSTOMER = {
  customerId: -1,
  customerName: '',
  city: '',
};

export const INITIALSTATE_PARTICIPANT = {
  participantName: '',
  participantId: -1,
  email: '',
  allergies: {
    allergyId: '',
  },
};
export const INITIALSTATE_COURSES = {
  courseId: -1,
  courseName: '',
  participants: {},
};
// const menuSideBarReducer = (state = INITIALSTATE_MENU, action) => {
//   //console.log("action", action);
//   switch (action.type) {
//     case actionTypes.MENU_FILL_CUSTOMERLIST:
//       return {
//         ...state,
//         allCustomers: action.customers,
//       };
//     case actionTypes.MENU_FILL_PARTICIPANTLIST:
//       return {
//         ...state,
//         allParticipants: action.participants,
//       };
//     case actionTypes.MENU_FILL_COURSESLIST:
//       return {
//         ...state,
//         allActivities: action.activities,
//       };
//     case actionTypes.MENU_OPEN_CHILDLIST:
//       console.log('reducer här e jaaaa', action);
//       return {
//         ...state,
//         children: action.children,
//         showChildSideBar: true,
//         showChildPage: false,
//         menutype: action.menutype,
//       };
//     case actionTypes.MENU_OPEN_CHILDPAGE:
//       return {
//         ...state,
//         child: action.child,
//         showChildSideBar: true,
//         showChildPage: true,
//         menutype: action.menutype,
//       };
//     case actionTypes.MENU_NEW_CUSTOMER:
//       console.log('NEW', action.type);
//       return {
//         ...state,
//         showChildSideBar: true,
//         showChildPage: true,
//         menutype: action.menutype,
//         child: INITIALSTATE_CUSTOMER,
//       };
//     case actionTypes.MENU_NEW_PARTICIPANT:
//       console.log('NEW', action.menutype);
//       return {
//         ...state,
//         showChildSideBar: true,
//         showChildPage: true,
//         menutype: action.menutype,
//         child: INITIALSTATE_PARTICIPANT,
//       };
//     case actionTypes.MENU_NEW_COURSE:
//       console.log('NEW', action.menutype);
//       return {
//         ...state,
//         showChildSideBar: true,
//         showChildPage: true,
//         menutype: action.menutype,
//         child: INITIALSTATE_COURSES,
//       };
//     case actionTypes.MENU_CLOSE:
//       console.log(' action.close', action);
//       return {
//         ...state,
//         showChildSideBar: false,
//         showChildPage: false,
//       };
//     case actionTypes.MENU_CLEAN:
//       console.log(' action.CLEAN', action);
//       return INITIALSTATE_MENU;
//     default:
//       return state;
//   }
// };
// export default menuSideBarReducer;
