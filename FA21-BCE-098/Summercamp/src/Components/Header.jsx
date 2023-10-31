import kidsummer from './download.jpeg'


const Header = () => {
  return (
            <div class="container">
                <div class="row">
                    <div class="col-8 text-center">
                       <img src={kidsummer} alt='Camp in Summmer' height="400px" className=''/>
                      <h1>Athlete Registration in Summer Camp</h1>
                    </div>
                </div>
            </div>
        );
};
export default Header;
