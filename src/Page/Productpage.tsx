
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Productpage.css";

const Productpage = () => {
  return (
    <>
      <div className="pagecontainer">
        <div className="productimage">
          <img src="src/img/thumbnail_placeholder.gif" alt="" />
          <h2>Stock (100/500)</h2>
        </div>
        <div className="product">
          <div className="productname">
            <h3>Product Name</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              quis dignissimos magni aperiam ipsa, pariatur accusantium eaque
              placeat earum harum minima eligendi! Quas eaque a enim distinctio
              amet eius saepe.
            </p>
            <p>price: $99</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <Button variant="contained" size="medium" href="checkout">
              Add to card
            </Button>
          </div>
          <div className="productdetail">
            <p>Specification</p>
            <p>display</p>
            <p>resolution</p>
            <p>ram</p>
            <p>storage</p>
          </div>
        </div>
      </div>
      <div className="reviewbox">
        <div className="rating">
          <p>Rate this Product</p>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained">Submit</Button>
        </div>
        <div className="review">
        <h4>Review</h4>
          <h3>Jack</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            dicta, voluptate officiis minus deleniti error, alias minima hic,
            nihil numquam in corrupti! Ipsam est repellat vero inventore itaque,
            quidem recusandae!
          </p>
          <h3>Jane</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            maiores suscipit similique harum facilis. Cupiditate doloribus quo
            dignissimos unde adipisci commodi voluptatum nostrum, totam illum
            suscipit hic, dolor reiciendis beatae.
          </p>
        </div>
      </div>
    </>
  );
};

export default Productpage;
