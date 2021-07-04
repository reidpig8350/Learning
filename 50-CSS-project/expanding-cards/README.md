## Expanding Cards

1. RWD
1. 當使用者點擊圖片時, 將該圖片展開
1. 小裝置的瀏覽器刪減部分內容

### HTML
以 div 元素的 background-image 呈現圖片

### CSS
1. flex-box 對於瀏覽裝置的適應性能很好, 是較為進階的屬性
1. parent element 的 position 為 relative, child element 的 position 為 absolute 是調整位置的規則
1. transition 過場的屬性, 可以調整時間及形式
1. flex: 5; 此屬性在切版上有很大的優勢, 數字代表等分（相對值）, 若所有元素的數字都一樣, 就代表平分該空間
1. box-sizing: border-box; 此屬性可以避免手動計算, 例如 padding, margin, border, 的粗細等等
1. ```@media (max-width: 480px){ /*CSS*/ }``` 控制不同裝置的 CSS 形式
1. ```@import url('foo');``` 引用 Google Font 的字體

### JavaScript

```javascript
element.classList.add("foo")
element.classList.remove("foo")
element.classList.value
```


#### Picture Resources

https://images3.alphacoders.com/776/thumbbig-7767.webp


https://images3.alphacoders.com/364/thumbbig-36455.webp


https://images8.alphacoders.com/695/thumbbig-695227.webp


https://images7.alphacoders.com/722/thumbbig-722394.webp


https://images7.alphacoders.com/837/thumbbig-837568.webp
