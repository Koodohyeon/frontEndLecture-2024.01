/* function calculateAge(birthDate) {
    let birthYear = birthDate.getFullYear() ;
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDay();

    let today = new Date()
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDay = today.getDay();

    let age = todayYear - birthYear ;

    if(todayMonth <= birthMonth) {
        age--;
    } else if (todayMonth === birthMonth && todayDay < birthDay) {
        age--; 

    }
    return age;

    }
    let birthDate = new Date(2000, 5, 13);
    let age = calculateAge(birthDate);
    console.log(age) */


    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        
        return age;
      }
      
      // 사용 예시
      const birthDate = '2000-01-03'; // 생년월일 입력
      const age = calculateAge(birthDate);
      console.log('만 나이는', age, '살 입니다.');