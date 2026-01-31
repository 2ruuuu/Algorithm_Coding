function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);
  let time = 0;
  let currentWeight = 0;

  while (bridge.length > 0) {
    time++; 

    let out = bridge[0]
    bridge.shift();
    currentWeight -= out;

    if (truck_weights.length > 0) {
      if (currentWeight + truck_weights[0] <= weight) {
        let truck = truck_weights[0];
        truck_weights.shift();
        bridge.push(truck);
        currentWeight += truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}