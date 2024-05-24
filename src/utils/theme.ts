import type { ThemeConfig } from 'antd'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#0B85FF',
    colorInfo: '#0B85FF',
    colorTextBase: '#404040',
    colorLink: '#0B85FF',
    colorError: '#ff503e',
    colorWarning: '#ffc041',
    colorSuccess: '#77de44',
    fontSize: 16,
    fontFamily: 'IBM Plex Sans Thai',
  },
  components: {
    Checkbox: {
      colorPrimary: '#77de44',
      colorBgContainerDisabled: '#77de44',
      colorPrimaryBg: '#77de44',
      colorPrimaryHover: '#77de44',
    },
  },
}
