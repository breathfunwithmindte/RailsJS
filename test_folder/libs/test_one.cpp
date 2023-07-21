#include <iostream>

// extern "C" int addNumbers(int a, int b) {
//     return a + b;
// }

int addNumbers(int a, int b) {  return a + b; }

int main() {
    int result = addNumbers(2, 3);
    std::cout << "Result: " << result << std::endl;
    return 0;
}