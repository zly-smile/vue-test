import {
  Button,
  ButtonGroup,
  Select,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Popover,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Dialog,

  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Upload,
  Tooltip,
  Cascader,
  Card,
  Tag,
  Scrollbar,

  Footer,
  Breadcrumb,
  BreadcrumbItem,

  Alert,

  Loading,
  MessageBox,
  Message,
  Notification,
  Steps,
  Step,
  Autocomplete

} from 'element-ui'

const components = [
  Button,
  ButtonGroup,

  Select,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Popover,

  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Dialog,

  Footer,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Upload,
  Tooltip,
  Cascader,
  Card,
  Tag,
  Scrollbar,

  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Steps,
  Step,

  Alert,
  Autocomplete
]

const install = (Vue) => {
  if (install.installed) {
    return
  }

  components.forEach(component => {
    Vue.use(component)
  })

  Vue.use(Loading.directive)

  Vue.$loading = Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.$alert = Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

export default {
  install
}
