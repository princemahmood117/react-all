// CONDITIONAL RENDERING

function Item({ name, isPacked }) {

  //   if(isPacked) {
  //     return <li>{name} ✅  </li>
  //   }
  //   return <li> {name} ❌  </li>


// above code using tarnary operation
//   return <li>{ isPacked ? name + " ✅ " :  name + " ❌ "  }</li>;


// যদি এক্সট্রা কোনো jsx লিখা লাগে সেক্ষেত্রে বাড়তি প্যারেন্থিসিস দিয়ে লেখা যাবে
//   return <li> { isPacked ? name + " ✅ " : <del> { name + " ❌"} </del> } </li>;


// && ব্যবহার হবে যখন শুধুমাত্র শর্ত পুরন হলেই রেন্ডার করা লাগবে (isPacked ট্রু হলেই টিক মার্ক দেখাবে)
  return <li> {name} { isPacked && " ✅ " }  </li>;

}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name="Space suit" isPacked={true} />
        <Item name="Helmet with a golden leaf" isPacked={true} />
        <Item name="Photo of Tam" isPacked={false} />
      </ul>
    </section>
  );
}


